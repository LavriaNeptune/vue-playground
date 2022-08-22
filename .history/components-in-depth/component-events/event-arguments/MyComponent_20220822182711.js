export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
  /* $emit 方法在指定触发自定义事件名时还可以 */
};
