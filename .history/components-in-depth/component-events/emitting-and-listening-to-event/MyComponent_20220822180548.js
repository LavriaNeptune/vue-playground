export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  template: ` <p @click="$emit('someEvent')"> {{ msg }} </p>`,
  /* 组件的模板表达式中可以通过特殊的 $emit 方法触发自定义事件 -> 此处的自定义事件名会自动转换为短横线特性名,以对应父组件层级的事件特性名 PS:虽然是自定义事件,但是也是支持 vue 提供的事件修饰符的 */
  /* 注意:自定义事件和原生事件不一样,组件触发的事件没有冒泡ji'zhi */
};
