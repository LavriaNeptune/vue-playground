export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: `<div> {{ msg }} <MyComponentB /></div>`,
};
