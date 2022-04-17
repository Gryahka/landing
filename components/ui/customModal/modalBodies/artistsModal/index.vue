<template>
  <div class="artistsModal">
    <div class="artistsModal__top">
      <img
        class="artistsModal__leftImg"
        :src="artistData.avatar"
        :alt="artistData.name"
      >

      <div class="artistsModal__right">
        <h1 class="artistsModal__name border border--half">
          {{ artistData.name }}
        </h1>

        <p class="artistsModal__preview">
          {{ artistData.preview }}
        </p>

        <div class="artistsModal__social">
          <a
            v-for="(item, index) in artistData.links"
            :key="index"
            class="artistsModal__link"
            :href="item"
          >
            <img
              class="artistsModal__icon"
              :src="'/icons/' + index + '.png'"
              :alt="index"
            >
          </a>
        </div>
      </div>
    </div>

    <div class="artistsModal__descr">
      <div class="artistsModal__textBox">
        <p class="artistsModal__text mb30">
          As part of the collaboration, we decided to interview each artist to
          reveal him from different angles.
        </p>

        <p class="artistsModal__text">
          11 artists, 11 interviews. Enjoy watching.
        </p>
      </div>

      <!-- @NOTE новая версия чата -->
      <div class="artistsModal__chat">
        <div
          v-for="(item, index) in artistData.messagesList"
          :key="index"
          class="artistsModal__message"
          :class="{
            artistsModal__message_sent: item.type === 'sent',
            artistsModal__message_received: item.type === 'received',
          }"
        >
          <p
            v-for="(paragraph, pIndex) in item.text"
            :key="pIndex"
            class="artistsModal__msgText"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistsModal',

  props: {
    artistData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.artistsModal {
  max-width: 890px;
  max-height: 95vh;

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
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__link {
    filter: grayscale(0);

    transition: 0.3s;

    &:hover {
      filter: grayscale(0.8);
    }
  }

  &__icon {
    height: 24px;
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

  &__msgText {
    font-family: "Inter";
    line-height: 32px;
  }
}
</style>
