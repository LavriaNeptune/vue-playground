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
    focus: {
      mounted: (el) => el.focus(),
    },
  },

  template: ` <input v-focus /> `,
};
