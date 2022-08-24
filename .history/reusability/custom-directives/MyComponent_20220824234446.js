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
    'v-focus': {},
  },

  template: ` <input v-focus /> `,
};
