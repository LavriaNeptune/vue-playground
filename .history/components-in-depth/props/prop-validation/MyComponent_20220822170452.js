export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },

  props: {
    foo: Number,
  },
  props 在注册时可以更加细致地声明对传入 props 的校验需求...具体做法是为 props 选项提供一个带有 props 校验选项的对象, 参见:
    type -> 限制 props 的类型
    


  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
