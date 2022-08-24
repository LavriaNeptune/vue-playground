import { useMouse } from './mouse.js';
export default {
  data() {
    return {
      x: useMouse().x,
      y: useMouse().y,
    };
  },
  setup() {
    const { x, y } = useMouse();
    return { x, y };
  },

  template: ` <div>{{x}},{{y}}</div> `,
};
