<template>
  <!-- class="xl:w-140px" -->
  <div
    style="
      background-image: url('/ref.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100vw;
    "
  >
    <main>
      <div class="flex">
        <button @click="Show = !Show" style="width: 50px; height: 20px; margin: 10px">
          <img src="C:/Users/Root/oge/src/images/Email.jpg" />
        </button>
      </div>
      <div
        v-show="Show"
        style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.95;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        "
      >
        <div
          style="
            border-radius: 20px;
            border: 2px solid white;
            position: relative;
            width: 550px;
            padding: 30px;
            opacity: 1;
          "
        >
          При возникновении вопросов или пожеланий, писать на почту mysytes2490@gmail.com
          <button
            type="button"
            id="btn"
            @click="Show = false"
            style="height: 10px; position: absolute; right: 20px; top: 20px; width: 10px"
          >
            X
          </button>
        </div>
      </div>

      <center>
        <a
          style="
            color: white;
            font-size: 50px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            line-height: 2;
          "
        >
          Правила ОГЭ и устного собеседования
        </a>
      </center>
      <br />
      <center>
        <div
          style="
            font-size: 20px;

            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: white;
          "
        >
          <button class="button" onclick="window.location.href='#/AboutMe'">
            Информация об ОГЭ и собеседовании
          </button>
          <br />
          <input
            class="button"
            type="button"
            value="Русский язык"
            onclick="window.location.href='#/RusIaz'"
          />
          <br />
          <input
            class="button"
            type="button"
            value="Математика"
            onclick="window.location.href='#/MaTh'"
          />
          <br />
          <input
            class="button"
            type="button"
            value="Химия"
            onclick="window.location.href='#/Chemistry'"
          />
          <br />
          <input
            class="button"
            type="button"
            value="Информатика"
            onclick="window.location.href='#/Informatics'"
          />
        </div>
      </center>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Show: false,
    };
  },
  methods: {
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.Show = false;
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style>
* {
  color: #cccccc;
}
</style>
