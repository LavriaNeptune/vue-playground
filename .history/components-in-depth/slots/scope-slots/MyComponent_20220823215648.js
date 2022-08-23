export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  template: ` 
              <slot name="header"></slot>
              <slot name="main" :msg="msg"></slot>
              <slot name="footer"></slot> `,
  /*  */
};
