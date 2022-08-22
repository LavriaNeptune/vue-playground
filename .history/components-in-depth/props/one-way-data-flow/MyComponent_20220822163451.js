export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['foo'],

  created() {
    this.foo = 'badThing';
  },
  // foo 作为 prop 属性,是只读的...如果尝试修改 prop 属性将会报错 -> [Vue warn]: Attempting to mutate prop "foo". Props are readonly. prop 这种只能由父组件

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
