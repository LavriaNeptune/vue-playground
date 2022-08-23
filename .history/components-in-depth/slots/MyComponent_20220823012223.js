export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },
  inheritAttrs: false,
  /* 如果希望一个组件不自动地继承 attribute,可以将组件选项 inheritAttrs 设置为 false */

  props: ['foo'],

  template: ` <div>
                <p> {{ msg }} </p>
                <p> 通过特性传入的值:{{foo}} </p>
                <slot></slot>
              </div> `,
};

/* <slot></slot> 中可以插入一些模板代码作为没有插槽内容时的默认插槽内容,如: */
