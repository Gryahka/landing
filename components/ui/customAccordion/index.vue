<template>
  <div
    :class="[
      'customAccordion',
      {
        open: isOpen,
      },
    ]"
  >
    <div
      class="customAccordion__head"
      :class="{ open: isOpen }"
      @click="onToggle"
    >
      <slot name="head" />

      <div
        v-if="isCustomHeadIcon"
        class="customAccordion__iconHead"
        :class="{ 'customAccordion__iconHead_open': isOpen }"
      >
        <slot name="headIcon" />
      </div>
    </div>

    <div
      class="customAccordion__body"
      :class="{ 'customAccordion__body_open': isOpen }"
    >
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomAccordion',
  props: {
    isOpenProps: {
      type: Boolean,
      default: false
    },
    isCustomHeadIcon: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: false
    }
  },

  created () {
    this.isOpen = this.isOpenProps
  },

  methods: {
    onToggle () {
      this.isOpen = !this.isOpen
      this.$emit('onToggle', this.isOpen)
    }
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/styles/variables.scss";

.customAccordion {
    padding-bottom: 24px;

    border-bottom-style: solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: radial-gradient(
        circle,
        rgba(201, 128, 254, 0.6) 30%,
        rgba(201, 128, 254, 0) 100%
    );

    @media (max-width: $media_xl) {
        padding-bottom: 12px;
    }

    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
    }

    &__iconHead {
        transition: 0.3s;

        &_open {
            transform: rotate(45deg);
        }
    }

    &__body {
        max-height: 0px;

        overflow: hidden;

        opacity: 0;

        transition: opacity 0.5s, max-height 0.5s ease-in;

        &_open {
            max-height: 5000px;

            overflow: visible;

            opacity: 1;
        }
    }
}
</style>
