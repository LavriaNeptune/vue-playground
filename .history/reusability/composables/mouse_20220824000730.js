// import { ref, onMounted, onUnmounted } from 'vue';
const { ref, onMounted, onUnmounted } = Vue;

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return { x, y };
}
/* 以上是一个鼠标坐标跟踪器的组合式函数范例 -> 其实上述代码完全可以直接卸载 MyComponent 文件中,仅仅是将这段可复用逻辑的代码yi'chu */