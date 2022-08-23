export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
    inheritAttrs:false
  },

  props: ['foo'],

  template: ` /*html*/ <div>
                <p> {{ msg }} </p>
                <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
