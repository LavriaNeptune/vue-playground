export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  template: ` <div>
                
                <p> 通过特性传入的值:{{foo}} </p>
                <slot>Default Content</slot>
              </div> `,
};