export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['foo'],
  template: ` <div><p> {{ msg }} </p>
                  <p> 属性{{foo}} </p>
              </div> `,
};
