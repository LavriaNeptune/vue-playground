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

  template: ` <div>{{x}},{{y}}</div> `,
};
