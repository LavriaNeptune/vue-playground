import MyComponentB from './MyComponentB.js';

export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  compo
  template: `<div> {{ msg }} <MyComponentB /></div>`,
};
