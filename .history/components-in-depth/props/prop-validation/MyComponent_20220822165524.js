export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },

  props: {
    foo: Number,
  },
  // props 在注册时可以更加细致di

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
