export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,



  template: ` <div>
                <p> {{ msg }} </p>
                <p> 通过特性传入的值:{{foo}} </p>
                <slot>Default Content</slot>
              </div> `,
};

/* <slot></slot> 中可以插入一些模板代码,作为没有插槽内容时的默认插槽内容,如: */
/* <slot>Default Content</slot> */
