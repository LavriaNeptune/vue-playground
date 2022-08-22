export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: ` <p @click=""> {{ msg }} </p>`,
};
