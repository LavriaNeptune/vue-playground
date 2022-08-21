export default {
  data() {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times
    </button>`,
};
/* 非生产环境下...Vue 组件以为纯 JS 代码的形式存在(实质就是对象)...
生产环境下建议以 vue */

