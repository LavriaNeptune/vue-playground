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
  /* name 是 Vue 特别保留的特性 -> 意味着它不会作为 props 传递给插槽 */
};
