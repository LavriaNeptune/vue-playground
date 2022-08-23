export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  props: ['modelValue'],
  emits: ['update:modelValue'],

  template: ` <input
                :value = "modelValue"
                @input="">`,
};
