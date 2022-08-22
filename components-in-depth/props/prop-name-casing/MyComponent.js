export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },

  // props: ['greeting-message'],
  /* 鉴于 js 属性 key 中不可以存在 - ;html 标签中不可以大写字母均视为小写字母... Vue 中规定:html 特性中的短横线风格的命名在转为 js 属性时会转换为对应的驼峰命名(大写字母 <-> -小写字母) */
  // 以上写法等价于:
  props: {
    'greeting-message': Number,
  },
  /* props: {
    greetingMessage: Number,
  }, */

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{ greetingMessage }} </p>
              </div> `,
};
