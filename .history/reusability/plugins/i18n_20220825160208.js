export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
  },
};
/* 插件是一种能为 Vue 添加全局功能的工具代码... */
