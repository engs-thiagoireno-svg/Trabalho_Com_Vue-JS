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
  
}



</script>