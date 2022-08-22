export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },


  props: {
    foo: Number,
  },
  // ↑ 规定 foo 特性应该接受 Number 类型的值,本例中传入的是字符串值,但是还是显示了字符串值，不过在控制台中可以发现 Vue 已经对数据类型不符发出了警告。

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
