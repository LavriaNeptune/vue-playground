import { useMouse } from './mouse';
export default {
  data() {
    return {
      x: useMouse().x,
      y: useMouse().x,
    };
  },


  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
