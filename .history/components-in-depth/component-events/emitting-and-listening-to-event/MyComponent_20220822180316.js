export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: ` <p @click="$emit('someEvent')"> {{ msg }} </p>`,
  /* 组件的模板表达式中可以通过特殊的 $emit 方法触发自定义事件 -> 此处的自定义事件对应 */
};
