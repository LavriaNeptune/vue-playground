export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  /* 如果希望一个组件不自动地继承 a't't */

  props: ['foo'],

  template: ` /*html*/ <div>
                <p> {{ msg }} </p>
                <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
