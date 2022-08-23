export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['modelValue'],
  emits: ['update'],

  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
};
