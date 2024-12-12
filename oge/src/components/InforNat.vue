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
      <a style="font-family: cursive; color: white; font-size: 25px; margin-left: -2%"
        >Информатика</a
      >
    </center>
  </header>
  <body>
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
            <div style="font-weight: bold; text-align: center">Основные правила:</div>
            <div style="font-weight: bold">Немного обо мне<br /></div>
            Данную теорию я хочу преподносить на задачах и видео т.к и мне, и вам, скорее
            всего, так будет комфортнее и понятнее.<br />Видео, в основе своей, записывал
            я сам.<br />
            <center style="font-weight: bold">
              ПЕРВОЕ ЗАДАНИЕ<img src="C:/Users/Root/oge/src/images/1.png" />
            </center>
            <br />
            Тут важно знать следующее: 1симв=32 бит, 1 байт=8 бит, пробела тоже считаются
            за символы.<br />
            Мы убираем какое-то слово и зачищаем от него следы. Это запятая и пробел.
            Убираем их. Это просто правило такое.<br />
            Теперь начинаем решать.<br />
            1) Переводим байты в биты т.к будем и всегда надо отталкиваться от того,
            насколько меньше/больше стало слово.А меньше оно стало на 28 БАЙТ. <br />
            Следовательно, надо перевести байты в биты. Это = 224 бита.<br />
            2)Теперь делим 224 на 32 чтобы найти кол-во символов, которое стерлось вместе
            с пробелом и запятой по правилу выше.<br />
            3)Получили ответ: 7 при делении. 7-запятая(1)-пробел(1)=5.<br />
            4)Ищем слово с 5 символами. ТЫКВА. Это и есть ответ!

            <center style="font-weight: bold">ВТОРОЕ</center>
            ЗАДАНИЕ: Вася шифрует русские слова, записывая вместо каждой буквы её номер в
            алфавите (без пробелов). Номера букв даны в таблице:
            <center>
              <br />
              <img src="C:/Users/Root/oge/src/images/2.jpg" />
            </center>
            <br />

            Рассмотрим первый код 20335. Двадцать (20) мы может расшифровать только, как
            букву Т.<br />
            Следующие две тройки (33) можно расшифровать, как две буквы В подряд, а можно,
            как букву Я.<br />
            Значит, этот шифр можно расшифровать разными способами.<br />

            Рассмотрим следующий код 21120.<br />
            Первое сочетание (21) можно расшифровать, как 2 и 1 - Б, A, а можно и как 21 -
            У.
            <br />Следовательно, данный код можно расшифровать разными способами.<br />

            Рассмотрим следующий код 31321.<br />
            Сочетание 31 мо рассматривать, как 3 и 1, а можно, как 31.<br />
            Поэтому шифр не подходит.<br />

            Остался последний шифр 51201.<br />
            Убедимся, что данный код нам подходит. 51 - это 5 и 1, т.е. Д и А.<br />
            Двадцать 20 - это только буква Т. Единица 1 - это A.<br />

            Ответ: ДАТА
            <br /><br />
            Само по себе, 2 задание очень простое. Просто надо чуть подумать.<br />
            Остальные примеры 2 задания можно в инете найти. Не особо вижу смысл их
            разбирать. Они очень легкие.
            <br />
            От себя оставлю ссылку на хорошее обьяснение 2 задания.<br />
            <a style="color: blue" href="https://youtu.be/Inuo7DnzfO0?si=03UEMt3OvpLnTCbH"
              >Нажми на меня</a
            ><br />
            <br />

            <center style="font-weight: bold">ТРЕТЬЕ</center>

            <center><img src="C:/Users/Root/oge/src/images/3.png" /></center>
            <br />
            Чтобы выполнить это задание, вам надо понять суть картинки ниже.<br /><br />
            <center><img src="C:/Users/Root/oge/src/images/ur_22_03.jpg" /></center>
            <br />
            Конъюнкция это можно принять за умножение. Или за слияние линий на
            прямой(1*1=1,1*0=0 и т.д).<br />
            Дизъюнкция это можно принять за сложение. или за всю область на прямой (1+1=1
            т.к не может быть больше 1, 1+0=1, 0+0=0).<br />
            Отрицание -противоположность. Противоположность в инф-ке знаку больше- знак
            меньше или равно.<br />
            В математике все наоборот. Не меняше или равно, а меньше.<br />
            т.к это точная наука. Запомните это чтобы проще запоминать и не путаться.<br />
            <br />
            И еще надо запомнить последовательность операций.<br />
            1) выполняется действие в скобках.<br />
            2)НЕ 3)Конъюнкция 4)Дизъюнкция
            <br />
            Теперь давайте рассмотрим пример.<br />
            1 выполняем НЕ т.к нету скобок.<br />
            НЕ(X меньше или равно 10) равно (X больше 10).<br />
            НЕ(X больше 16) равно (X меньше или равно 16 (т.к неточная наука)).<br />
            Последняя операция. Надо найти слияние линий .<br /><br />
            <center>
              <img
                src="C:/Users/Root/oge/src/images/photo_2024-01-21_14-31-22.jpg"
                style="width: 600px"
              />
            </center>
            <br />
            <br />

            <center style="font-weight: bold">ЧЕТВЕРТОЕ</center>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/LuooBybv4lA?si=FUUWcQ2Jg8HsmaEF"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />
            <br />

            <center style="font-weight: bold">ПЯТОЕ</center>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/4tQ2a1L5y0I?si=mUHmlEkpDCNCc97H"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />
            <br />

            <center style="font-weight: bold">ШЕСТОЕ</center>
            Все команды кумира, которые надо знать, описанны в видео. <br />Я не
            программировал на pascal, piton.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/h98cI_njhtk?si=JSu4x2bqWmWnJ5wg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />

            <center style="font-weight: bold">СЕДЬМОЕ</center>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/dzPKwfTaKhs?si=quPRi0EVIFNy_K9X"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />
            Хочу обратить внимание, что файлы определяются по расширению: ?.docx или .doc,
            .txt и т.д<br />
            Иногда работают по друугой формуле т.к той, что в видео описали
            недостаточно:<br />
            Протокол://адрес сайта или сервера/каталог/подкаталог/подкатолог/файл с
            расширением.<br />
            Но это усложненная версия.
            <br />

            <center style="font-weight: bold">ВОСЬМОЕ</center>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/fl8Z4aJ7NJY?si=X-kWiMDB-RR3UMed"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />
            <br />

            <center style="font-weight: bold">ДЕВЯТОЕ</center>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/6_3y8cq7yaw?si=PaTU6mJZBBAR3Wta"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/SOt9bksT_bE?si=bxM1wpMdaJ8XoEs7"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />
            <br />

            <center style="font-weight: bold">ДЕСЯТОЕ</center>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <center>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/DI2qkSKnQtk?si=5DOQQki_riFMJUdv "
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/_bXkZzhEmL0?si=ts3eZs5vUxUktT3F"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </center>
            <br />
            <br />

            <center style="font-weight: bold">EXEL</center>
            Наверное, самое страшное задание по инфе. Все его боятся и по нему слагают
            легенды.<br />
            Основные правила построянеия показаны на фото ниже.<br />
            <center>
              <img src="C:/Users/Root/oge/src/images/exel.jpg" />
            </center>
            <br />
            <br />
          </div>
        </grid>
      </div>
    </a>
  </body>
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
