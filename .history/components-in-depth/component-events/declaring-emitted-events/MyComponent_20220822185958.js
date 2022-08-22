export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  emits: ['someEvent'],
  /* 类似于 props 校验,emits 校验也是通过对象形式来描述 -> 事件属性要被赋值*/
  template: ` <p @click="$emit('someEvent')"> {{ msg }} </p>`,
};
