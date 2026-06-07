<script setup>
import { ref } from 'vue'

const menuAberto = ref(false)

const links = [
  { texto: 'Início', rota: '/' },
  { texto: 'Cronograma', rota: '/cronograma' },
  { texto: 'Palestrantes', rota: '/palestrantes' },
  { texto: 'Inscrição', rota: '/inscricao' },
]



</script>