export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  template: ` 
              <slot name="header"></slot>
              <slot name="main"></slot>
              <slot name="footer"></slot> `,
  /* 上述带有 name 的插槽就是所谓的具名插槽 */
};
