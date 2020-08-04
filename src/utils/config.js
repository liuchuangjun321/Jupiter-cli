exports.InquirerConfig = {
  // 文件夹已存在的名称的询问参数
  folderExist: [{
    type: 'list',
    name: 'recover',
    message: '当前文件夹已存在，请选择操作：',
    choices: [
      { name: '创建一个新的文件夹', value: 'newFolder' },
      { name: '覆盖', value: 'cover' },
      { name: '退出', value: 'exit' },
    ]
  }],
  // 重命名的询问参数
  rename: [{
    name: 'inputNewName',
    type: 'input',
    message: '请输入新的项目名称: '
  }]
}

// 远程Repo地址
// 大家开发阶段，如果没有自己的项目，可以先调用我的这个地址练习
// 也可以随便一个地址练习都可以
exports.RepoPath = 'github:chinaBerg/vue-typescript-admin'
