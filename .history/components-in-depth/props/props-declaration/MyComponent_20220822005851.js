export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  components: { MyComponentB },
  props: ['msg'],
  template: `<div><p> {{ msg }} </p><p></p></div>`,
};
