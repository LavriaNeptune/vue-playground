export default {
  data() {
    return {};
  },
  setup() {
    const vFocus = {
      mounted: (el) => el.focus(),
    };
  },
  directives:[vFoucs]

  template: ` <input v-focus /> `,
};
