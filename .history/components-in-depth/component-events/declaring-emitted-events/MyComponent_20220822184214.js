export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  emits: ['someEvent'],
  /* 组件上要触发的自定义事件可以显式的通过 emits 选项来声明(当然不声明照样可以触发shi'jian) */
  template: ` <p @click="$emit('someEvent')"> {{ msg }} </p>`,
};
