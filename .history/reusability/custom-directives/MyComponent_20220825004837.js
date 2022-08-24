export default {
  data() {
    return {};
  },

  directives: {
    focus: {
      mounted: (el) => el.focus(),
    },
  },
  /* 非 <script setup>  */

  template: ` <input v-focus /> `,
};
