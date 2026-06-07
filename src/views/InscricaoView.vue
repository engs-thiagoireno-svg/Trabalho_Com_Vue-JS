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