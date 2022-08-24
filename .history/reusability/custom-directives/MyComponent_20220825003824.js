export default {
  data() {
    return {};
  },
  setup() {
    const vFocus = {
      mounted: (el) => el.focus(),
    };
  },
  directives: {
    focus: {},
  },

  template: ` <input v-focus/> `,
};
