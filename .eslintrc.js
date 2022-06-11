/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  },
  overrides: [
    // 关闭组件命名规则
    {
      files: [
        'src/views/index.vue',
        'src/views/**/index.vue',
        'src/layout/**/index.vue'
      ], // 匹配views和二级目录中的index.vue
      rules: {
        'vue/multi-word-component-names': 'off'
      } //给上面匹配的文件指定规则
    }
  ],
  globals: {
    // 不主动写这个，提交的时候 eslint检查不通过
    ElMessage: true
  }
}
