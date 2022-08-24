// import { ref, onMounted, onUnmounted } from 'vue';
const { ref, onMounted, onUnmounted } = Vue;

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }
}
