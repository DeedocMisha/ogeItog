<template>
  <header
    class="sticky top-0 p-5"
    style="
      min-width: 500px;
      width: 100%;
      background-color: rgb(119, 0, 255);
      justify-content: center;
      height: 60px;
    "
  >
    <a href="#">
      <img src="../images/OUT.png" style="height: 30px; width: 30px; float: left" />
    </a>
    <center>
      <a style="font-family: cursive; color: white; margin-left: -2%; font-size: 25px"
        >Математика</a
      >
    </center>
  </header>
  <main>
    <a
      style="
        color: rgb(0, 0, 0);
        font-size: 19px;
        font-family: 'Times New Roman', Times, serif;
      "
    >
      <div
        style="
          margin: 14%;
          margin-top: 10px;
          font-size: 20px;
          font-family: 'Times New Roman', Times, serif;
        "
      >
        <grid style="min-width: 400px; width: 80%">
          <div style="min-width: 400px">
            <div style="font-weight: bold; text-align: center; font-weight: bold">
              Основные правила:
            </div>
            <br />
            <center style="font-weight: bold">Площади фигур</center>
            <br />

            S треуг=1/2*h(Высота(90* к основанию))*a(основание) ИЛИ 1/2*a*b(Сторона у угла
            альфа)*sina<br />
            P труег=a+b+c<br />
            S ромба,паралелограмма,<br />
            трапеции=1/2*d1*d2*sina<br />
            S паралелограмма= a*h ИЛИ a*b*sina<br />
            S ромба=1/2*d1*d2<br />
            S прямоугольника=a*b<br />
            S квадр.=a^2 ИЛИ 1/2*d^2<br />
            S трапеции=1/2*(a+b)*h<br /><br />
            Теперь я хочу прикрепить фото, которое поможет вам в будущем разобраться с
            sina,cosa и т.д. Просто сохраните на будущее.<br /><br />
            <center><img src="C:/Users/Root/oge/src/images/l.jpg" /><br /></center>
            Вот ссылка на видео по тому, как ориентироваться в радианах<br />
            <a
              style="color: blue"
              href="https://yandex.ru/video/touch/preview/17434072524027311061?parent-reqid=1704312530649163-7627308056124575906-balancer-l7leveler-kubr-yp-sas-33-BAL-1356&text=%D0%BA%D0%B0%D0%BA+%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BB%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D1%82%D1%80%D0%B8%D0%B3%D0%BE%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8"
              >Нажми на меня</a
            ><br />
            <br />
            <center style="font-weight: bold">Вероятность:</center>
            <br />
            Находится, как отношение (деление) того, что надо найти на общее количество.
            Дополнительная информация Все остальное, можно найти на роликах на ютубе.<br />
            <br />

            <center><img src="C:/Users/Root/oge/src/images/д.jpg" /><br /></center>
            Окружность-360градусов<br /><br />
            Радиус- расстояние от центра окружности до её края (круга), если просто
            обьяснять.<br /><br />
            Диаметр-расстояние от одной части круго до другой, проходящей через центр.
          </div>
        </grid>
      </div>
    </a>
  </main>
</template>
<style>
* {
  color: #cccccc;
}
</style>
<script setup>
import { onMounted } from "vue";

function handleKeydown(event) {
  if (event.key === "Escape") {
    window.location.href = "#";
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
</script>
