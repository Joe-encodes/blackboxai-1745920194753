import * as fs from 'fs';
import * as path from 'path';

interface FileSystemItem {
    name: string;
    type: 'file' | 'directory';
    content?: string; // Only for files
}

const shouldExclude = (filePath: string): boolean => {
    const excludeDirs = new Set(['node_modules', 'src']);
    const excludeFiles = new Set(['package-lock.json', 'dir_archiver.ts', 'dir_archiver.js']); //keep .py just in case
    const parts = filePath.split(path.sep);

    // Exclude node_modules directories
    if (parts.some(part => excludeDirs.has(part))) {
        return true;
    }

    // Exclude specific files
    if (excludeFiles.has(path.basename(filePath))) {
        return true;
    }

    return false;
};

const getFileSystemStructure = (rootPath: string): FileSystemItem[] => {
    const structure: FileSystemItem[] = [];
    const stack: string[] = [rootPath];

    while (stack.length > 0) {
        const currentPath = stack.pop()!;
        if (shouldExclude(currentPath)) {
            continue;
        }

        try {
            const stats = fs.statSync(currentPath);

            if (stats.isDirectory()) {
                structure.push({
                    name: path.relative(rootPath, currentPath),
                    type: 'directory',
                });

                const files = fs.readdirSync(currentPath);
                // Push directories onto the stack *first* so they are processed
                // before files in the current directory.  This is important
                // for recreating the directory structure in the output.
                const dirs: string[] = [];
                const filz: string[] = [];

                for (const file of files) {
                    const fullPath = path.join(currentPath, file);
                    if (fs.statSync(fullPath).isDirectory()){
                        dirs.push(fullPath);
                    }
                    else{
                        filz.push(fullPath);
                    }
                }
                stack.push(...dirs);
                stack.push(...filz); //push files

            } else if (stats.isFile()) {
                const relativePath = path.relative(rootPath, currentPath);
                if(!shouldExclude(currentPath)){ // double check
                    try {
                        const content = fs.readFileSync(currentPath, 'utf-8');
                        structure.push({
                            name: relativePath,
                            type: 'file',
                            content,
                        });
                    } catch (readError) {
                         structure.push({
                            name: relativePath,
                            type: 'file',
                            content: `[⚠️ SKIPPED BINARY/UNREADABLE FILE: ${path.basename(currentPath)}]`,
                        });
                    }
                }

            }
        } catch (err) {
            console.error(`Error processing ${currentPath}: ${err}`);
            // Handle errors, e.g., file not found, permission issues
            //  Don't throw, because we want to continue processing the
            //  rest of the directory structure.  Instead, record an
            //  error in the output, or skip.
            structure.push({
                name: path.relative(rootPath, currentPath),
                type: 'file', // Treat as file for simplicity
                content: `[⚠️ ERROR: Could not process item: ${err}]`,
            });

        }
    }
    return structure;
};

const saveDirectoryStructure = (rootPath: string, outputFile: string): void => {
    const structure = getFileSystemStructure(rootPath);
    let outputText = '';

    structure.forEach(item => {
        if (item.type === 'directory') {
            outputText += `📁 ${item.name}\n`;
        } else {
            outputText += `│   📄 ${item.name}\n`;
            if (item.content) {
                outputText += `\n────── FILE CONTENT ──────\n${item.content}\n────── END CONTENT ───────\n\n`;
            }
        }
    });

    fs.writeFileSync(outputFile, outputText, 'utf-8');
    console.log(`✅ Directory structure saved to ${outputFile} (excluded node_modules/ and package-lock.json)`);
};

// Main execution
const rootDir = process.argv[2];
const outputFile = process.argv[3];

if (!rootDir || !outputFile) {
    console.error('Usage: ts-node script.ts <root_dir> <output_file>');
    process.exit(1);
}

saveDirectoryStructure(rootDir, outputFile);
