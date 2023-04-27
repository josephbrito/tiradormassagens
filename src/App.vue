<script setup>
import { RouterLink, RouterView } from "vue-router";
import "./assets/base.css";
</script>

<template>
  <header>
    <div class="logo">
      <a href="/"><img src="@/assets/logo.png" alt="logo" /></a>
    </div>

    <nav>
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/agendar">Agende aqui</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  height: 14vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
}

.logo {
  width: 100px;
  height: 80px;
}

@media (max-width: 600px) {
  .logo {
    width: 60px;
    height: 40px;
  }
}
.logo img {
  max-width: 100%;
}

.logo img:hover {
  opacity: 0.8;
}

nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.2rem;
  transition: 0.5s ease-in;
}

nav a:hover {
  opacity: 0.7;
  font-size: 1.199rem;
}
</style>
