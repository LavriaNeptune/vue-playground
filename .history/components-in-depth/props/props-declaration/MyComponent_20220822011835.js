export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['foo'],
  // 组件所接受的自定义 props,需要在组件内部通过 props 显式地声明 -> 声明后的特性会
  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
