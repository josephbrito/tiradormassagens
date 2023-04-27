<template>
  <footer class="footer">
    <h2>Adauto Matos</h2>
    <span
      >Desenvolvido por:
      <a target="_blank" href="https://github.com/josephbrito"
        >&copy;José de Brito</a
      ></span
    >

    <address>
      <h2>Localização</h2>
      <p>Avenida Eid Mansur, 286</p>
      <p>Parque São George</p>
      <p>Cotia</p>
      <p>São Paulo</p>
    </address>
    <div class="social">
      <a target="_blank" href="https://wa.me/5511942444954">
        <v-icon name="co-whatsapp" fill="green" scale="1.3" />
      </a>

      <a
        target="_blank"
        href="https://www.facebook.com/people/Tira-dor-Massagens/100092408042146/"
      >
        <v-icon name="co-facebook-f" fill="blue" scale="1.3" />
      </a>

      <v-icon name="co-instagram" fill="pink" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  min-height: 25vh;
  border-top: 1px solid #181818;
  display: flex;
  align-items: center;
  justify-content: space-around;
  scroll-snap-align: start;
  margin-top: 40px;
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.social a:hover {
  opacity: 0.6;
}

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
