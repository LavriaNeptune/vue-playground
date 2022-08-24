/* 异步数据请求时往往需要考虑、处理不同的状态:加载中、加载成功、加载失败 -> 将获取数据的这个逻辑抽象出来成为一个组合式函数 */

const { ref } = Vue;

export function uesFetch()
