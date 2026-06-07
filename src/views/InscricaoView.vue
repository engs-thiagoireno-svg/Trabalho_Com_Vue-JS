<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nomeEquipe: '',
  emailLider: '',
  experiencia: 'iniciante',
  acessibilidade: false,
})

const erros = reactive({
  nomeEquipe: '',
  emailLider: '',
})

const mostrarModal = ref(false)

function validar() {
  erros.nomeEquipe = ''
  erros.emailLider = ''
  let valido = true

  if (form.nomeEquipe.trim().length < 3) {
    erros.nomeEquipe = 'Informe um nome de equipe com pelo menos 3 letras.'
    valido = false
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regexEmail.test(form.emailLider)) {
    erros.emailLider = 'Informe um e-mail válido.'
    valido = false
  }
  return valido
}

function enviar() {
  if (validar()) {
    mostrarModal.value = true
  }
}

function fecharModal() {
  mostrarModal.value = false
  form.nomeEquipe = ''
  form.emailLider = ''
  form.experiencia = 'iniciante'
  form.acessibilidade = false
}
</script>

<template>
    <main class="page-content">
        <h1 class="page-title">Garanta sua vaga</h1>

        <form class="inscricao-form" @submit.prevent="enviar">
      <fieldset>
        <legend>Dados da Equipe</legend>

        <label for="nomeEquipe">Nome da Equipe:</label>
        <input
          type="text"
          id="nomeEquipe"
          v-model="form.nomeEquipe"
          :class="{ 'input-erro': erros.nomeEquipe }"
        />

        <p v-if="erros.nomeEquipe" class="msg-erro">{{ erros.nomeEquipe }}</p> <!-- mensagem de erro do v if -->

        <label for="emailLider">E-mail do Líder:</label>
        <input
          type="email"
          id="emailLider"
          v-model="form.emailLider"
          :class="{ 'input-erro': erros.emailLider }"
        />

        </fieldset>
        </form>
    </main>
</template>