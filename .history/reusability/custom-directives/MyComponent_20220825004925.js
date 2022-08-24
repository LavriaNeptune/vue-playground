export default {
  data() {
    return {};
  },

  directives: {
    focus: {
      mounted: (el) => el.focus(),
    },
  },
  /* 非 <script setup> 情况下,自定义指令需要通过 directives 进行注册 -> <script setup> 下可以直接通过以 v 开头的驼峰式命名变量 */

  template: ` <input v-focus /> `,
};
