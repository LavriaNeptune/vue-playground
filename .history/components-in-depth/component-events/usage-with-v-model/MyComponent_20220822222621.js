export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  prop
  emits: ['someEvent'],

  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
};
