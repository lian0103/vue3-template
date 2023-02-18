#! /usr/bin/env node

// command sample : npx gt-template [projectName]

const fs = require('fs');
const path = require('path');

const TemplateMap = {
    default: 'template',
    elementPlus:'TemplateElementPlus'
};

const projectName = process.argv[2];

console.log('projectName',projectName)
console.log('template',process.argv[3])

const targetTemplate =
    process.argv[3] && Object.keys(TemplateMap).includes(process.argv[3]) ? process.argv[3] : 'default';

if (!projectName) {
    console.error('projectName is empty');
    process.exit(1);
}

// step1 新增專案夾
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
console.log('projectDir', projectDir);
fs.mkdirSync(projectDir, { recursive: true });

// step2 從模板夾複製
const templateDir = path.resolve(__dirname, TemplateMap[targetTemplate]);
console.log('templateDir', templateDir);
fs.cpSync(templateDir, projectDir, { recursive: true });

// step3 處理專案文件

fs.renameSync(path.join(projectDir, 'gitignore'), path.join(projectDir, '.gitignore'));

const projectPackageJson = require(path.join(projectDir, 'package.json'));
projectPackageJson.name = projectName;
fs.writeFileSync(path.join(projectDir, 'package.json'), JSON.stringify(projectPackageJson, null, 2));
