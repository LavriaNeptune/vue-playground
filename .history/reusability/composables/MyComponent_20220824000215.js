import { useMouse } from './mouse';
export default {
  data() {
    return {
      x: 'Hello World from Component A',
    };
  },


  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
