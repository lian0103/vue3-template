#! /usr/bin/env node

// command sample : npx gt-template [projectName]

const spawn = require('cross-spawn');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
    console.error('projectName is empty');
    process.exit(1);
}

// step1 新增專案夾
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

// step2 從模板夾複製
const templateDir = path.resolve(__dirname, 'template');
fs.cpSync(templateDir, projectDir, { recursive: true });

// step3 處理專案文件

fs.renameSync(path.join(projectDir, 'gitignore'), path.join(projectDir, '.gitignore'));

const projectPackageJson = require(path.join(projectDir, 'package.json'));
projectPackageJson.name = projectName;
fs.writeFileSync(path.join(projectDir, 'package.json'), JSON.stringify(projectPackageJson, null, 2));

// step4 npm啟動
// spawn.sync(`cd ${projectName}`);
// spawn.sync('npm', ['install'], { stdio: 'inherit' });

// console.log('Success! Your new project is ready.');
// console.log(`Created ${projectName} at ${projectDir}`);
