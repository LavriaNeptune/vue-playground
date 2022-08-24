export default {
  data() {
    return {};
  },

  directives: {
    focus: {
      mounted: (el) => el.focus(),
    },
  },
  /* 非 <script setup> 情况下,自定义指令 */

  template: ` <input v-focus /> `,
};
