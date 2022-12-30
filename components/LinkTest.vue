<template>
  <li class="desktop-menu-item mx-5">
    <nuxt-link
      @click.native="subMenu"
      to="#"
      class="desktop-item-link has-submenu py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
    >
      {{ linkTitle }}
      <!-- @click.native="subMenu" -->
    </nuxt-link>
    <div
      :class="{
        active: subMenuActive,
      }"
      class="submenu lg:py-[50px] lg:px-[80px]"
    >
      <div class="submenu-title border-gray border-b-[1px] block lg:hidden">
        <p
          class="text-lg font-bold py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
        >
          {{ linkTitle }}
        </p>
      </div>
      <div
        class="submenu-container py-[20px] lg:py-0 px-[30px] sm:px-[55px] md:px-[80px] lg:px-0"
      >
        <ul class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <li>
            <a href="">{{ subMenuTitle }}</a>
          </li>
          <li>
            <a href="">Записаться на сервис </a>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  emits: ['isSubMenu'],
  props: {
    linkTitle: {
      //   type: 'string',
    },
    subMenuTitle: {
      //   type: 'string',
    },
    isSubMenu: {
      type: Boolean,
    },
  },
  data() {
    return {
      subMenuActive: false,
      showBg: false,
    }
  },
  methods: {
    // addSubMenu() {
    //   this.$emit('addSubMenu', (this.subMenuActive = !this.subMenuActive))
    // },
    subMenu() {
      this.subMenuActive = !this.subMenuActive

      //   if (this.subMenuActive) {
      //     this.showBg = true
      //   }
    },
  },
}
</script>

<style></style>
