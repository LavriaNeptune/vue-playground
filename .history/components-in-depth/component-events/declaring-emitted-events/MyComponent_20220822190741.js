export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  // emits: ['someEvent'],
  emits:
  /* 类似于 props 校验,emits 校验也是通过对象形式来描述 -> 事件属性要被赋值为一个函数,这个函数的参数就是抛出事件时的 this.$emit 所指向的内容 -> 只有当该函数 return 的布尔值为 true 时表示验证通过... */
  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
};
