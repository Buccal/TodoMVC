# TodoMVC Readme

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

作为Vue.js的小练习，实现以下功能：

1. 能够新增、删除、修改Todo
2. 能实时显示未完成Todo的个数
3. 可以切换全部、已完成和未完成的Todo
4. 可以一键完成所有Todo和一键清除所有已完成Todo
5. 可以存储Todo的数据以便下次继续使用


## 目录

- [背景](#背景)
- [安装](#安装)
- [实现细节](#实现细节)
- [例子](#例子)
- [参考](#参考)
- [License](#license)

## 背景

参照[官网示例-TodoMVC](https://cn.vuejs.org/v2/examples/todomvc.html)实现，模板使用的是[TodoMVC App Template](https://github.com/tastejs/todomvc-app-template)

## 安装

1. 在根目录下运行cmd，输入指令`npm install`安装依赖

1. 待依赖安装完成，继续输入指令`npm run dev`，稍等片刻，项目就会启动

## 实现细节

- 当Todo列表为空时，隐藏列表和底部控件栏
- Todo输入框
  - 当页面载入时，光标自动聚焦到输入框
  - 按下回车创建新的Todo，并将其添加到Todo列表，清空输入框
  - 新创建的Todo不能为空
- Todo完成状态
  - 点击每个Todo前的复选框可以切换该条Todo的完成状态
  - 选中全部完成按钮，所有Todo修改为已完成状态
  - 选中全部完成按钮，所有Todo恢复之前的状态
  - 当其中某个Todo状态变化，全部完成按钮需更新是否选中的状态
- 修改模式
  - 双击Todo文字显示修改输入框，并自动聚焦
  - 当按下回车或失去焦点时，自动保存并退出编辑模式；
  - 当按下ESC时，不保存修改的内容并退出编辑模式；
  - 当修改为空，删除该条Todo
- 当鼠标悬浮在Todo上，显示删除按钮，点击可删除该条Todo
- 计算未完成Todo数量，注意量词对单词item的影响（items）
- 点击底部控件切换，可以切换展示所有、未完成、已完成的Todo列表
- 点击清除按钮，可以删除所有已完成Todo
- 存储Todo列表到localStorage

## 截图

![TodoMVC截图](https://raw.githubusercontent.com/Buccal/TodoMVC/master/Screenshots/2021-07-01_224558.png)


## 参考

[Vue.js官网示例-TodoMVC](https://cn.vuejs.org/v2/examples/todomvc.html)
[TodoMVC App Template](https://github.com/tastejs/todomvc-app-template)


## Licenseue.js

[MIT](LICENSE) © Buccal
