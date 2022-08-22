export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  emits: ['someEvent'],
  /* 类似于 props 校验,emits 校验也是通过对象形式来描述 -> 事件属性要被赋值为一个函数,这个函数就是抛出事件时*/
  template: ` <p @click="$emit('someEvent',msg)"> {{ msg }} </p>`,
};
