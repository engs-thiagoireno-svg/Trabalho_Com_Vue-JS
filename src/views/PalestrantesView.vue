<script setup>
import { ref, computed } from 'vue'

const palestrantes = [
  {
    nome: 'Piazão do Front',
    foto: 'https://media.licdn.com/dms/image/v2/D4D03AQGR59GSYZ1VQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706293541390?e=1782345600&v=beta&t=vtZQ8Db24IQ9LIE3b6H0xOC83BZiIGCOdiTJEKIXDB0',
    especialidade: 'Especialista em Web',
    descricao:
      'Vai te ajudar a estruturar a lógica e o Front-End do seu projeto.',
    },
    {
    nome: 'Teletubbies',
    foto: 'https://static.wixstatic.com/media/449abe_0e5d916784184d3784f6e5828ef6d351~mv2.jpg/v1/fill/w_864,h_864,al_c,q_85,enc_avif,quality_auto/Character-Laa-Laa.jpg',
    especialidade: 'Animar teu dia',
    descricao: 'Ela é alegre, brincalhona e cheia de energia. Tem o corpo todo amarelo e sua antena no topo da cabeça tem o formato de um espiral (uma espécie de cacho ondulado), que é a marca que a diferencia das outras.',
    },]

    const busca = ref('')

    const filtrados = computed(() => {
  const termo = busca.value.trim().toLowerCase()
  if (!termo) return palestrantes
  return palestrantes.filter(
    (p) =>
      p.nome.toLowerCase().includes(termo) ||
      p.especialidade.toLowerCase().includes(termo)
  )
})

</script>

<template>
    <main class="page-content">
        <h1 class="page-title">mentores e Palestrantes</h1>
        
        <div class="busca-wrapper">
        <input
            type="text"
            v-model="busca"
            placeholder="Buscar por nome ou especialidade..."
            />
        </div>

        <section class="cards-container" v-if="filtrados.length > 0">
      <div class="flip-card" v-for="(p, index) in filtrados" :key="index">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img :src="p.foto" :alt="p.nome" />
            <h3>{{ p.nome }}</h3>
          </div>
          <div class="flip-card-back">
            <h3>{{ p.especialidade }}</h3>
            <p>{{ p.descricao }}</p>
          </div>
        </div>
      </div>
    </section>

    <p v-else class="sem-resultado">Nenhum palestrante encontrado.</p>

    </main>
</template>