<template>
  <div class="artistsModal">
    <div class="artistsModal__top">
      <img
        class="artistsModal__leftImg"
        src="/icons/closeIcon.png"
        alt="cross"
      >

      <div class="artistsModal__right">
        <h1 class="artistsModal__name border border--half">
          NIKVSIO
        </h1>

        <p class="artistsModal__preview">
          jgjfth rshrhst rdh rdh rheshthsbrvscdz
        </p>

        <div class="artistsModal__social">
          <a
            class="artistsModal__link"
            href="/"
          >
            <svgicon
              class="artistsModal__icon"
              :name="'crossPlus'"
              :original="true"
            />
          </a>

          <a
            class="artistsModal__link"
            href="/"
          >
            <svgicon
              class="artistsModal__icon"
              :name="'crossPlus'"
              :original="true"
            />
          </a>

          <a
            class="artistsModal__link"
            href="/"
          >
            <svgicon
              class="artistsModal__icon"
              :name="'crossPlus'"
              :original="true"
            />
          </a>

          <a
            class="artistsModal__link"
            href="/"
          >
            <svgicon
              class="artistsModal__icon"
              :name="'crossPlus'"
              :original="true"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="artistsModal__descr">
      <div class="artistsModal__textBox">
        <p class="artistsModal__text mb30">
          As part of the collaboration, we decided to interview each artist to reveal him from different angles.
        </p>

        <p class="artistsModal__text">
          11 artists, 11 interviews. Enjoy watching.
        </p>
      </div>

      <!-- @NOTE новая версия чата -->
      <div class="artistsModal__chat">
        <div class="artistsModal__message artistsModal__message_sent">
          <p class="artistsModal__msgText">
            Hi, Nikvsio! Tell about yourself
          </p>

          <p class="artistsModal__msgText">
            Second paragraph
          </p>
        </div>

        <div class="artistsModal__message artistsModal__message_received">
          <p class="artistsModal__msgText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti cupiditate reiciendis commodi ea, ipsum laboriosam excepturi earum maiores sapiente molestias quam laborum? Dignissimos quis doloribus nihil dolor praesentium culpa.
          </p>
        </div>
      </div>

      <!-- @NOTE старая версия чата -->
      <!-- <div class="artistsModal__message">
        <div class="artistsModal__senderBox">
          <p class="artistsModal__sender">
            Hi, Nikvsio! Tell about yourself
          </p>
        </div>

        <div class="artistsModal__receivingBox">
          <p class="artistsModal__receiving">
            I am a digital/multimedia artist and designer, working on the borderline of analog and digital technology, based in Amsterdam. Currently, I am working as an independent designer, artist, and curator on self-initiated and commissioned projects. Those projects take roots from my position as an international designer and a frequent traveler, allowing me to study and experience often diverse perspectives. My interests span over a wide range of topics. They include various critical social-political issues that are often given form through high-tech experiments and multimedia platforms questioning on and offline realities.
          </p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistsModal'
}
</script>

<style lang="scss" scoped>
.artistsModal {
  // @NOTE лучше задавать "резиновые" величины. Огромная модалка при маленьком контенте выглядит не оч(
  max-width: 890px;
  // width: 890px;
  max-height: 95vh;
  // height: 811px;

  padding: 52px 91px 52px 98px;

  background: var(--bg_main);
  overflow: auto;

  &::before {
      content: "";

      position: absolute;
      bottom: 0px;
      left: 0px;

      width: calc(100% - 14px);
      height: 305px;

      background: linear-gradient(
          360deg,
          #000000 40.03%,
          rgba(0, 0, 0, 0) 111.5%
      );

      pointer-events: none;
  }

  &__top {
    display: grid;
    grid-template-columns: 147px auto;
    gap: 54px;

    margin-bottom: 35px;
  }

  &__leftImg {
    width: 147px;
    height: 168px;
  }

  &__name {
    margin-bottom: 14px;
    // @NOTE Продление линии подчеркивания можно сделать за счет padding справа
    padding: 0 90px 10px 0;

    // @NOTE если сюда вставится имя с большей длиной, то будет отображаться некорректно
    // width: 260px;
    width: fit-content;

    font-family: "Cinzel";
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.04em;

  }

  &__preview {
    font-family: "Inter";
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    letter-spacing: 0.04em;

    margin-bottom: 22px;
  }

  &__social {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    max-width: 141px;
  }

  &__icon {
    width: 20px;
    height: 17px;
  }

  &__textBox {
    font-family: "Cinzel";
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    letter-spacing: 0.04em;

    margin-bottom: 25px;
  }

  &__chat {
    display: grid;
    gap: 30px;
  }

  // <-- @NOTE начало новых стилей
  // @NOTE есть блок artistsModal__message (сообщение), у этого блока есть модификаторы для отрпвленного и принятого сообщения. Дублирующиеся стили хрянтся в классе artistsModal__message, а отличающиеся в классах модификаторах
  &__message {
    padding: 8px 20px;

    max-width: 640px;
    width: fit-content;

    border-radius: 25px;

    background: linear-gradient(339.78deg, #221629 0%, #4d3859 100%);

    &_sent {
      justify-self: end;

      border-bottom-right-radius: 0;
    }

    &_received {
      border-bottom-left-radius: 0;
    }
  }

  //  @NOTE  лучше задавать стили конкретно блоку сообщения, а не через наследование из родителя, как это было сделано раньше. Почему? Вдруг, у нас к сообщению добавится время отрпавки или неважно какой элемент с отливчающимися стилями. И в таком случае есть вероятность, что их нужно будет переоределять.
  &__msgText {
    font-family: "Inter";
    line-height: 32px;
  }

  // --> @NOTE конец новых стилей

  // @NOTE новые стили чата

  /* <-- @NOTE старые стили чата
  &__message {
    display: grid;
    gap: 30px;

    font-family: "Inter";
    font-size: 16px;
    line-height: 32px;
  }

  &__senderBox {
    justify-self: end;

    width: fit-content;

    padding: 8px 20px;

    border-radius: 25px 25px 0px 25px;

    background: linear-gradient(339.78deg, #221629 0%, #4d3859 100%);
  }

  &__sender {
    max-width: 595px;
  }

  &__receivingBox {
    padding: 11px 24px;

    width: fit-content;

    border-radius: 25px 25px 25px 0px;

    background: linear-gradient(339.78deg, #221629 0%, #4d3859 100%);
  }

  &__receiving {
    max-width: 595px;
  }
  --> @NOTE старые стили */
}
</style>
