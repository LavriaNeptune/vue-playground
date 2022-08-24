export default {
  data() {
    return {};
  },
  setup() {
    const vFocus = {
      mounted: (el) => el.focus(),
    };
  },
  directives: {},

  template: ` <input v-focus /> `,
};
