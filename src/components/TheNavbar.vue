<script setup>
import { ref } from 'vue'

const menuAberto = ref(false)

const links = [
  { texto: 'Início', rota: '/' },
  { texto: 'Cronograma', rota: '/cronograma' },
  { texto: 'Palestrantes', rota: '/palestrantes' },
  { texto: 'Inscrição', rota: '/inscricao' },
]

function alternarMenu() {
  menuAberto.value = !menuAberto.value
}

function fecharMenu() {
  menuAberto.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="logo">CAMPO REAL<span> HACKATHON</span></div>

    <button
      class="hamburguer"
      :class="{ aberto: menuAberto }"
      @click="alternarMenu"
      aria-label="Abrir menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav>
      <ul class="nav-links" :class="{ aberto: menuAberto }">
        <li v-for="link in links" :key="link.rota">
          <router-link :to="link.rota" @click="fecharMenu">
            {{ link.texto }}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
