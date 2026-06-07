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
}



</script>