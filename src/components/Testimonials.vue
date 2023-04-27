<script setup>
import Footer from "./Footer.vue";
import { RouterLink } from "vue-router";
defineProps({
  info: {
    type: Array,
  },
});
</script>

<template>
  <section class="sectiont">
    <h1>Confira os depoimentos</h1>
    <div class="testimonials">
      <div class="card" v-for="person in info">
        <div class="profile">
          <span>{{ person.name }}</span>
          <div><v-icon name="fa-user-alt" scale="1.3" /></div>
        </div>

        <div class="message">
          {{ person.message }}
        </div>
      </div>
    </div>
    <RouterLink class="btn" to="/agendar">Agende aqui</RouterLink>
  </section>
  <Footer />
</template>

<style scoped>
.sectiont {
  min-height: calc(100vh - 20vh);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  scroll-snap-align: start;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.testimonials {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card {
  height: auto;
  width: 95%;
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.profile {
  width: 19%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.profile span {
  font-weight: bold;
  font-size: 1.1rem;
}

.message {
  max-width: 70%;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.6rem;
}

.btn {
  padding: 20px;
  width: 200px;
  cursor: pointer;
  border: none;
  background-color: #181818;
  color: #f5f5f5;
  transition: 0.4s ease-in-out;
}
.btn:hover {
  background-color: #f5f5f5;
  color: #181818;
}

@media (max-width: 700px) {
  .testimonials {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-items: center;
  }

  .card {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
