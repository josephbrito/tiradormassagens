<script setup>
import Footer from "./Footer.vue";
</script>

<template>
  <section class="schedule" id="agendar">
    <h1>Contatos</h1>
    <div class="line"></div>
    <div class="content">
      <div class="contacts">
        <h3>Agende aqui</h3>
        <div class="contact">
          <a target="_blank" href="https://wa.me/5511942444954">
            <v-icon name="co-whatsapp" fill="green" scale="1.3" />
            <span class="clabel">+55 11 94244-4954</span></a
          >
        </div>
        <div class="contact">
          <v-icon name="fa-phone-alt" fill="blue" />
          <span class="clabel">11 4612-0792</span>
        </div>
      </div>

      <div class="social_container">
        <h3>Redes sociais</h3>

        <div class="social">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Tira-dor-Massagens/100092408042146/"
          >
            <v-icon name="co-facebook-f" fill="blue" scale="1.3" />
            <span class="clabel">Facebook</span></a
          >
        </div>
        <div class="social">
          <a target="_blank" href="https://www.instagram.com/tiradormassagens/">
            <v-icon name="co-instagram" fill="pink" />
            <span class="clabel">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.schedule {
  min-height: calc(100vh - 30vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.7rem;
}

.content {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.line {
  width: 100%;
  height: 1px;
  background: #181818;
}

.contacts,
.social_container {
  display: flex;
  margin-top: 100px;
  gap: 1.1rem;
  flex-direction: column;
}

.contact,
.social {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.contact a,
.social a {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.contact a:hover,
.social a:hover {
  opacity: 0.5;
}
.contact a {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.clabel {
  font-size: 1.1rem;
  font-weight: bold;
}

@media (max-width: 700px) {
  .content {
    flex-direction: column;
  }

  .contact,
  .social {
    justify-content: center;
  }
}
</style>
