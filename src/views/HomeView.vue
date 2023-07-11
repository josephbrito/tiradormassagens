<script setup>
import Showcase from "../components/Showcase.vue";
import Adauto from "../assets/adauto.png";

import Demoadauto from "../assets/demoadauto.gif";
import Massage from "../assets/massage-3.png";
import Promo from "../assets/promo.png";
import Testimonials from "../components/Testimonials.vue";
</script>

<template>
  <main class="container">
    <Showcase text="Tira dor" desc="Massagens" :photo="Adauto" />
    <Showcase
      text="Quem sou eu"
      desc="Adauto terapeuta quântico. Estou a mais de 10 anos praticando a terapia quântica"
      reverse
      is-small
      :photo="Demoadauto"
    />
    <Showcase
      text="Massagem vibracional"
      desc="Toque quântico de cura que elimina suas dores"
      is-small
      :photo="Massage"
    />
    <Showcase
      text="Estamos com promoção de 4 Sessões pelo preço de 3"
      desc="Não perca tempo e agende já sua sessão!"
      is-small
      reverse
      :photo="Promo"
    />
    <Testimonials
      :info="[
        {
          name: 'Ir. Jane',
          message: `Fazer as sessões de TQC foi muito importante!! A terapia destravou algo em mim que tirou a tristeza e o medo. Quando saímos da sessão ficamos num estado de calma maravilhoso. Eu saí recomendando para todos que conheço! rsrs Na primeira vez já me senti viva, alegre e corajosa.Algo me colocou alinhada com o universo e comigo mesma, como se eu estivesse sida resgatada.Foi algo muito diferente!! As sessões para as dores que sentia, foram excelentes, porque os motivos foram curados e as dores sumiram. Amei e super recomendo que façam TQC!!`,
        },
        {
          name: 'Cliente',
          message: `Um Dom, escolhe a pessoa, pelo seu coração.
Ter um Dom é um privilégio.
Meu amigo Adauto, tem um Dom.
Suas mãos tem o poder, tem a capacidade de aliviar dores.
Sou muito grato ao seu Dom, por tantas vezes ter aliviado o meu desconforto.
Abraço.`,
        },
      ]"
    />
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
</style>
