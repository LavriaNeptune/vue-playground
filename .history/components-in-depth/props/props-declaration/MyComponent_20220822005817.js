export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  components: { MyComponentB },
  template: `<div><p> {{ msg }} </div>`,
};
