<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const dataEvento = new Date('2026-03-31T09:00:00')
const dias = ref(0)
const horas = ref(0)
const minutos = ref(0)

let intervalo = null

function atualizarContagem() {
  const agora = new Date()
  const diferenca = dataEvento - agora

  if (diferenca <= 0) {
    dias.value = 0
    horas.value = 0
    minutos.value = 0
    return
  }

  dias.value = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  horas.value = Math.floor((diferenca / (1000 * 60 * 60)) % 24)
  minutos.value = Math.floor((diferenca / (1000 * 60)) % 60)
}

</script>