export default {
  data() {
    return {};
  },
  setup() {
    const v-focus = {
      mounted: (el) => el.focus(),
    };
  },
  directives: {
    focus: {},
  },

  template: ` <input v-focus/> `,
};
