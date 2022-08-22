export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  components: { MyComponentB },
  props: ['foo'],
  template: `<div><p> {{ msg }} </p>
                  <p> {{foo}} </p>
             </div>`,
};
