export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  template: ` <div>
                <slot name="header"><>
              </div> `,
};