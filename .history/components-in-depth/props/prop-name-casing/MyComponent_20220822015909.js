export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },

  props: ['greeting-message'],
  

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{ greetingMessage }} </p>
              </div> `,
};
