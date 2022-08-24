// import { ref, onMounted, onUnmounted } from 'vue';
const { ref } = Vue;
import { useEventListener } from './event.js';

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  // function update(event) {
  //   x.value = event.pageX;
  //   y.value = event.pageY;
  // }

  // onMounted(() => window.addEventListener('mousemove', update));
  // onUnmounted(() => window.removeEventListener('mousemove', update));

  // ↓ 进一步封装 添加和清除 DOM 事件监听器的逻辑 ↓

  return { x, y };
}
/* 以上是一个鼠标坐标跟踪器的组合式函数范例 -> 其实上述代码完全可以直接卸载 MyComponent 文件中,仅仅是将这段可复用逻辑的代码移出到了外部函数中,并仅返回需要暴露的状态 -> 这样任何需要鼠标定位功能的组件都可以轻松地复用 useMouse 了 */
/* 更妙的是:一个组合式函数还可以再调用一个或其他多个组合式函数...这样就可以像使用组件一样使用多个组件整合成整个应用了 -> 这也是为什么称之为组合式函数的原因之一 */
