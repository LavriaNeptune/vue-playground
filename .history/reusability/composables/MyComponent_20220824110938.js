import { useMouse } from './mouse.js';
export default {
  data() {
    return {};
  },
  setup() {
    const { x, y } = useMouse();
    return { x, y };
  },
  /* setup 钩子函数是在组件中使用组合式 API 的入口, */
  /* 好像直接这样写也行,但是无法很好区分数据来源:
    data() {
    return {
      x: useMouse().x,
      y: useMouse().y,
    };
  }, */

  template: ` <div>{{x}},{{y}}</div> `,
};
