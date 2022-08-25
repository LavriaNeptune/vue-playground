export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
  },
};
/* 插件是一种能为 Vue 添加全局功能的工具代码...插件往往是一个拥有 install 方法的对象(也可以是一个安装函数本身) -> 安装函数会接收到 */
