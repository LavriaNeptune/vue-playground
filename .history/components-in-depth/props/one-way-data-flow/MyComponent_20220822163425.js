export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['foo'],

  created() { 
    this.foo = 'badThing'
  },
  // foo 作为 prop 属性,是只读的...如果尝试修改

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
