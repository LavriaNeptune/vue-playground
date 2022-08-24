export default {
  data() {
    return {};
  },
  setup() {
    const vFocus = {
      mounted: (el) => el.focus(),
    };
  },
  directives: ['vFocus'],

  template: ` <input v-focus /> `,
};
