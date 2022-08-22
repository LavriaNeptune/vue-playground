export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  emits: ['someEvent'],
  /* 组件上 */
  template: ` <p @click="$emit('someEvent')"> {{ msg }} </p>`,
};
