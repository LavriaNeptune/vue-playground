import { useFetch } from './fetch.js';

export default {
  data() {
    return {};
  },
  setup() {
    const { data, error } = useFetch(
      ,
    );
    // Vue 官网的测试用 API
    return { data, error };
  },

  template: ` <div>{{data}},{{error}}</div> `,
};
