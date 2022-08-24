import { useMouse } from './mouse';
export default {
  data() {
    return {
      x: useMouse().x,
      y: useMouse().y,
    };
  },

  template: ` <div>{{x,y}}
              </div> `,
};
