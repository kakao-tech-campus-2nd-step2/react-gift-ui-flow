const fs = require('fs');
const path = require('path');

function generateFolderStructure(dir, prefix = '') {
  const contents = fs.readdirSync(dir);
  contents.forEach((content, index) => {
    if (content === 'node_modules') return; // node_modules 폴더 제외

    const fullPath = path.join(dir, content);
    const isDirectory = fs.statSync(fullPath).isDirectory();
    const connector = index === contents.length - 1 ? '└──' : '├──';

    console.log(`${prefix}${connector} ${content}`);

    if (isDirectory) {
      const newPrefix = prefix + (index === contents.length - 1 ? '    ' : '│   ');
      generateFolderStructure(fullPath, newPrefix);
    }
  });
}

// 시작 디렉토리 설정
const startDir = './'; // 현재 디렉토리 기준
console.log(path.basename(startDir));
generateFolderStructure(startDir);

// 다음 명령어로 실행 "node generate-folder-structure.js"