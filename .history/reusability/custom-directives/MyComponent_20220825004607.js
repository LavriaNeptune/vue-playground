export default {
  data() {
    return {};
  },
  setup() {
    const focus = {
      mounted: (el) => el.focus(),
    };
    return focus;
  },
  directives: {
    focus,
  },

  template: ` <input v-focus /> `,
};
