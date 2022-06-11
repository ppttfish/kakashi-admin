module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 的类型定义：表示git提交的type必须在以下范围内
    'type-enum': [
      // 当前验证级别
      2,
      // 在什么情况下验证
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0, 'never']
  }
}
