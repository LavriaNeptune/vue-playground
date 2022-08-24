export default {
  data() {
    return {};
  },

  directives: {
    focus: {
      mounted: (el) => el.focus(),
    },
  },
  /* 非 <script setup> 情况下,自定义指令需要通过 directives  */

  template: ` <input v-focus /> `,
};
