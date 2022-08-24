export default {
  install: (app, options) => {
    app.config.globalProperties.$translate = (key) => { 
      return key.split('.')
    }
  },
};
