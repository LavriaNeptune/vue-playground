export default {
  data() {
    return {
      count: 0,
    };
  },
  props: ['title', 'post-font-size'],
  /* 通过自定义传入的属性可以直接通过对应属性名获取其值...自定义属性名要在组件的 props 选项中进行注册 -> 注册后的可以视为 data 中的数据..只不过是来自于上层组件而已 */
  template: `

    <button @click="count++">
      You clicked me {{ count }} times
    </button>
    
`,
};
/* 非生产环境下...Vue 组件以为纯 JS 代码的形式存在(实质就是对象)...
生产环境下建议以 .vue 文件来编写 Vue 组件...引进方式同 .js 文件 */
