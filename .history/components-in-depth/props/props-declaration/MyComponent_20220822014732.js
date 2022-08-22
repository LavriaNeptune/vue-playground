export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['foo'],
  // 组件所接受的自定义 props,需要在组件内部通过 props 显式地声明对应的特性名 -> 声明后的特性会像 data 中声明的数据一样使用...
  // 除了上述的字符串数组的方式来声明 prop 之外,还可以使用对象的方式来声明 prop,其中的属性名为 prop 的名称,属性值为 prop 预期类型的构造函数
  /* props: {
    foo: Number,
  }, */
  // ↑ 规定 foo 特性应该接受 Number 类型的值,本例中传入的是字符串值,但是还是显示了字符串值，不过在控制台中可以发现 Vue 已经对数据类型不符发出了警告。
  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
