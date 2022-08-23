export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  /* 如果希望一个组件不自动地继承 attribute,可以在组件 */

  props: ['foo'],

  template: ` /*html*/ <div>
                <p> {{ msg }} </p>
                <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
