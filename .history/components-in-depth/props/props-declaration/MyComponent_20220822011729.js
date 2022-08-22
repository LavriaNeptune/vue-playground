export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['foo'],
  // 自定义特性
  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
