export default {
  data() {
    return {
      msg: 'Hello World from Component B',
    };
  },
  inject: ['message'],
  template: `<div> <p>{{ msg }}</p> <p>{{message}}</p></div>`,
};
