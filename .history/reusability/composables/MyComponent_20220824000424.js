import { useMouse } from './mouse.js';
export default {
  data() {
    return {
      x: useMouse().x,
      y: useMouse().y,
    };
  },

  template: ` <div>{{x}}{{y}}</div> `,
};
