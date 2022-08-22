export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
  /* $emit 方法在指定触发自定义事件名时还可以附带上若干可选参数作为该事件的参数...这些参数会作为父组件中事件处理方法的参数被使用 */
};
