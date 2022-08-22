export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  // emits: ['someEvent'],
  emits: {
    someEvent: ({msg}) => {
      console.log(obj);
    },
  },

  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
};
