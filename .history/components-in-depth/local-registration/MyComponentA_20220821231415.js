import MyComponentB from './MyComponentB.js';

export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  components
  template: `<div> {{ msg }} <MyComponentB /></div>`,
};
