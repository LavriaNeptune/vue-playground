import { useFetch } from './fetch.js';

export default {
  data() {
    return {};
  },
  setup() {
    const url = "'https://jsonplaceholder.typicode.com/todos/1'"
    const { data, error } = useFetch(
      ,
    );
    // Vue 官网的测试用 API
    return { data, error };
  },

  template: ` <div>{{data}},{{error}}</div> `,
};
