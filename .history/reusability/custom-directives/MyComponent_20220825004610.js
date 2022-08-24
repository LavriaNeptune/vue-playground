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
    this.focus,
  },

  template: ` <input v-focus /> `,
};
