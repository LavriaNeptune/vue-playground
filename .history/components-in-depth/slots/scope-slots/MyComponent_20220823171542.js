export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  template: ` 
              <slot name="header"></slot>
              <slot name="main" :msg=></slot>
              <slot name="footer"></slot> `,
  /* 上述带有 name 的插槽就是所谓的具名插槽 -> 如果未提供 name 的 <slot> 将会被隐式地命名为 default */
};
