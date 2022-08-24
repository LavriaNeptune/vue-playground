export default {
  data() {
    return {};
  },
  setup() {
    const vFocus = {
      mounted(el) {
        el.focus();
      },
    };
  },

  template: ` <input v-focus /> `,
};
