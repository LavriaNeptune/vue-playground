export default {
  data() {
    return {
      msg: 'Hello World from Component B',
    };
  },
  inject: ['msg'],
  template: `<div> <p>{{ msg }}</p> <p></p></div>`,
};
