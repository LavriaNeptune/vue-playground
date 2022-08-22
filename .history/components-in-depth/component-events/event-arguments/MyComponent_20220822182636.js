export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
  /* $emit */
};
