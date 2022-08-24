/* 异步数据请求时往往需要考虑、处理不同的状态:加载中、加载成功、加载失败 -> 将获取数据的这个逻辑抽象出来成为一个组合式函数 */

const { ref } = Vue;

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}
