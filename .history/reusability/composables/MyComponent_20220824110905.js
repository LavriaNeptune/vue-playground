import { useMouse } from './mouse.js';
export default {
  data() {
    return {};
  },
  setup() {
    const { x, y } = useMouse();
    return { x, y };
  },
  /*  */
  /* 好像直接这样写也行,但是无法很好区分数据来源:
    data() {
    return {
      x: useMouse().x,
      y: useMouse().y,
    };
  }, */

  template: ` <div>{{x}},{{y}}</div> `,
};
