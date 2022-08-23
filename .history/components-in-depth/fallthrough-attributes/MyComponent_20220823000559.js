export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },

  props: ['foo'],

  template: ` <div>Hello<p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
