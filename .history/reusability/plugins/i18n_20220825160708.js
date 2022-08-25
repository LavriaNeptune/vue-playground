export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i];
      }, options);
    };
  },
};
/* 插件是一种能为 Vue 添加全局功能的工具代码...插件往往是一个拥有 install 方法的对象(也可以是一个安装函数本身) -> 安装函数会接收到安装它的一个应用实例和传递给 app.use 的额外选项作为参数 */

/* 插件发挥作用的常见场景有:
  app.component 注册全局组件
  app.directive 注册全局自定义指令
  app.provide 注入全局可使用资源
  app.config.globalProperties 添加全局属性或方法 */