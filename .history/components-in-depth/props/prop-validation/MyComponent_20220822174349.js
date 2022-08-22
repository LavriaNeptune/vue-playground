export default {
  data() {
    return {
      msg: 'Hello World from Component A',
    };
  },

  props: {
    foo: Boolean,
  },
  /* props 在注册时可以更加细致地声明对传入 props 的校验需求...具体做法是为 props 选项提供一个带有 props 校验选项的对象, 参见:
    type -> 限制 props 的类型
    required -> 通过其布尔值设定对应 prop 是否必须传入,该项默认值未 false -> prop 默认是可选的
    default -> 当未传入 prop 时的默认设定值,如果不对其进行设置,prop 默认的默认值均为 undefined(Boolean 类型的是例外,其默认值为 true) -> default 函数:如果默认值为引用类型数据,需要通过工厂函数提供默认值...该 default 函数会接受到组件所接受的原始 props 作为参数 PS: boolean 类型的特性有特别的类型转换规则 -> 存在
    validator(){} 校验参数...传入 props 参数会作为该方法的参数传入...只有当该函数 return true,才说明通过校验 */
  // PS:prop 校验发生在组件实例创建之前 -> 所以实例的数据在 default、validator 函数中不可用...

  template: ` <div><p> {{ msg }} </p>
                  <p> 通过特性传入的值:{{foo}} </p>
              </div> `,
};
