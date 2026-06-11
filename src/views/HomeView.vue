<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dataEvento = new Date('2026-03-31T09:00:00')
const dias = ref(0)
const horas = ref(0)
const minutos = ref(0)

let intervalo = null

function atualizarContagem() {
  const agora = new Date()
  const diferenca = dataEvento - agora

  if (diferenca <= 0) {
    dias.value = 4
    horas.value = 2
    minutos.value = 24
    return
  }

  dias.value = Math.floor(diferenca / (1000 * 60 * 60 * 24))
  horas.value = Math.floor((diferenca / (1000 * 60 * 60)) % 24)
  minutos.value = Math.floor((diferenca / (1000 * 60)) % 60)
}

onMounted(() => {
  atualizarContagem()
  intervalo = setInterval(atualizarContagem, 1000 * 30)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<template>
  <main class="hero">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <h1>HACKATHON</h1>
      <p>A Revolução Tecnológica</p>

      <div class="countdown-container">
        <div class="time-box">
          <span>{{ dias }}</span>
          <p>DIAS</p>
        </div>
        <div class="time-box">
          <span>{{ horas }}</span>
          <p>HORAS</p>
        </div>
        <div class="time-box">
          <span>{{ minutos }}</span>
          <p>MINUTOS</p>
        </div>
      </div>

      <p style="color: var(--azul-neon)">Data do evento: 11/07/2026</p>

      <div class="cta-wrapper">
        <router-link to="/inscricao" class="btn-main"> INSCREVA-SE JÁ! </router-link>
      </div>
    </div>
  </main>
</template>
