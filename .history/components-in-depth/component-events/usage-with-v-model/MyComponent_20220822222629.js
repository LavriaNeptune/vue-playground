export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['model'],
  emits: ['someEvent'],

  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
};
