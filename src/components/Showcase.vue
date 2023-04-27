<script setup>
defineProps({
  text: String,
  desc: String,
  photo: String,
  reverse: Boolean,
  isSmall: Boolean,
});
</script>

<template>
  <section :class="reverse ? 'showcase revflex' : 'showcase'">
    <div class="showcase_name">
      <h1
        :style="{
          fontSize: isSmall ? '3rem' : '4rem',
        }"
      >
        {{ text }}
      </h1>
      <div class="line"></div>
      <h3>{{ desc }}</h3>
    </div>

    <div
      class="photo"
      :style="{
        background: 'url(' + photo + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: isSmall ? '60%' : '80%',
        width: isSmall ? '55%' : '60%',
      }"
    ></div>
  </section>
</template>

<style scoped>
.showcase {
  height: calc(100vh - 14vh);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -10px -10px 5px rgba(0, 0, 0, 0.05);
  scroll-snap-align: start;
  margin-bottom: 200px;
}

.revflex {
  flex-direction: row-reverse;
}

.showcase_name {
  font-family: "Josefin Sans", sans-serif;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.showcase_name h1 {
  font-size: 4rem;
  font-weight: bold;
}
.showcase_name h3 {
  font-size: 2rem;
}
.line {
  width: 40%;
  height: 1px;
  background-color: #181818;
  margin: 20px 0;
}

.photo {
  width: 60%;
  height: 80%;
}

@media (max-width: 700px) {
  .showcase {
    flex-direction: column;
    justify-content: space-evenly;
  }
  .showcase_name {
    width: 100%;
  }
  .photo {
    max-height: 40%;
    min-width: 100%;
  }

  .line {
    min-width: 100%;
  }

  .showcase_name h1 {
    font-size: 2rem !important;
    font-weight: bold;
  }
}
</style>
