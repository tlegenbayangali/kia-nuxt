<template>
  <div>
    <div class="hero relative w-full bg-dark">
      <div class="relative hero-slider-container overflow-hidden">
        <div class="swiper-wrapper">
          <div
              class="swiper-slide"
              v-for="(heroSlide, idx) in heroSlides"
              :key="idx"
          >
            <div
                class="relative text-white"
                :class="[
                    {
                  'hero-slider-item-left': heroSlide['side'] === 'left',
                  'hero-slider-item-right': heroSlide['side'] === 'right',
                },
              ]"
            >
              <div class="img w-full">
                <img
                    class="w-full object-cover h-full"
                    :src="heroSlide['image']"
                    alt=""
                />
              </div>
              <div
                  :class="[
                  {
                    'xl:items-end': heroSlide['side'] === 'right',
                  },
                ]"
                  class="relative xl:absolute h-full w-full top-0 left-0 py-5 px-3.5 xl:py-[50px] xl:px-[160px] z-[2] flex justify-between flex-col"
              >
                <div
                    :class="[
                    {
                      'xl:flex xl:flex-col xl:items-end':
                        heroSlide['side'] === 'right',
                    },
                  ]"
                    class="info-top"
                >
                  <div class="slider-heading mb-5 text-5xl font-bold">
                    {{ heroSlide["title"] }}
                  </div>
                  <span
                      class="slider-description text-lg inline-block mb-10 xl:mb-0"
                  >
                    {{ heroSlide["text"] }}
                  </span>
                </div>
                <div class="info-bottom">
                  <div class="btn-wrapper btn-wrapper-lg btn-wrapper-white">
                    <Button
                        btnWrapperSize="lg"
                        btnWrapperType="white"
                        v-if="heroSlide['button']['visible']"
                        :btnHref="heroSlide['button']['to']"
                        :btnText="heroSlide['button']['title']"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>

        <div class="navigation hidden xl:block">
          <button
              class="left-[80px] arrow arrow-prev swiper-button-prev hero-arrow-prev hidden xl:block"
          >
            <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                class=""
            >
              <path
                  d="M8 4l-6 6 6 6M2.5 10H21"
                  stroke="currentColor"
                  stroke-width="1.5"
              ></path>
            </svg>
          </button>
          <button
              class="right-[80px] arrow arrow-next swiper-button-next hero-arrow-next hidden xl:block"
          >
            <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                class=""
            >
              <path
                  d="M13 16l6-6-6-6M18.5 10H0"
                  stroke="currentColor"
                  stroke-width="1.5"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <section class="models w-full py-20">
      <div>
        <div class="container">
          <div class="models-top">
            <h1 class="section-heading">{{ $t("models") }}</h1>
          </div>
          <client-only>
            <div
                class="select max-w-[300px] md:max-w-[400px] mb-[40px] border-b border-[rgba(5,20,31,.3)]"
            >
              <MultiSelect
                  @select="selectValue()"
                  v-model="model"
                  track-by="name"
                  label="name"
                  selectLabel=""
                  deselectLabel=""
                  :selectedLabel="$t('selected')"
                  :allow-empty="false"
                  :placeholder="$t('select model')"
                  :options="modelsName"
                  :searchable="false"
                  value="all"
              >
                <template slot="singleLabel" slot-scope="{ option }">
                  {{ option.name }}
                </template>
              </MultiSelect>
            </div>
          </client-only>
        </div>
        <div class="overflow-hidden">
          <div class="container">
            <client-only>
              <dalacodeSlider className="models-container" ref="modelSlider">
                <div
                    v-for="model in filteredModels"
                    :key="model.id"
                    class="swiper-slide flex flex-col justify-between model w-[265px] cursor-pointer"
                    :data-option="model.slug"
                >
                  <div class="top mb-[10px]">
                    <div class="img">
                      <nuxt-link to="#" v-if="model.thumb.length">
                        <img
                            class="w-[265px]"
                            :src="model.thumb"
                            :alt="model.name"
                        />
                      </nuxt-link>
                    </div>
                    <div class="title mb-2.5">
                      <div class="flex">
                        <nuxt-link to="#">
                          <span
                              class="mr-2.5 font-bold text-lg relative hover_line"
                          >{{ model.name }}</span
                          >
                        </nuxt-link>
                        <span
                            v-show="true"
                            class="bg-green py-[2px] px-[7px] text-white inline-block"
                        >Новинка</span
                        >
                      </div>
                    </div>
                    <div class="model-row">
                      <div class="d-flex">
                        <span class="mr-[10px] price-sm text-base"
                        >от 10 000 000 ₸</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="model-row justify-end">
                      <div class="flex links">
                        <nuxt-link to="#" class="readmore">
                          О модели
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </div>
              </dalacodeSlider>
            </client-only>
          </div>
        </div>
      </div>
    </section>

    <section class="service bg-lgray w-full py-20 overflow-hidden">
      <div class="container">
        <div>
          <h4 class="section-heading">Онлайн сервисы</h4>
          <client-only
          >
            <dalacodeSlider>
              <div
                  v-for="(onlineService, idx) in onlineServices"
                  :key="idx"
                  class="swiper-slide bg-pattensBlue flex flex-col justify-between service-item"
              >
                <nuxt-link
                    :to="onlineService['to']"
                    class="p-2.5 flex items-center"
                >
                  <span class="mr-5">
                    <img
                        width="50px"
                        height="50px"
                        :src="onlineService['icon']"
                        alt=""
                    />
                  </span>
                  <span class="text-lg text-dark font-normal">
                    {{ onlineService["title"] }}
                  </span>
                </nuxt-link>
              </div>
            </dalacodeSlider>
          </client-only>
        </div>
      </div>
    </section>

    <section class="offers w-full py-20 overflow-hidden">
      <div class="container">
        <div>
          <h4 class="section-heading">
            Акции и спецпредложения на автомобили Kia
          </h4>
          <client-only>
            <dalacodeSlider className="grid">
              <div
                  v-for="(offerCar, idx) in offerCars"
                  v-show="offerCar['isShow']"
                  :key="idx"
                  class="swiper-slide bg-lgray flex flex-col justify-between model"
              >
                <div class="offers-card w-full">
                  <div class="img">
                    <nuxt-link :to="offerCar['to']">
                      <img
                          class="h-[190px] w-full object-cover"
                          :src="offerCar['image']"
                          :alt="offerCar['title']"
                      />
                    </nuxt-link>
                  </div>
                  <div class="p-5">
                    <div class="flex flex-col">
                      <nuxt-link :to="offerCar['to']">
                        <span
                            class="mr-2.7 underlined-black text-base font-bold"
                        >
                          {{ offerCar["title"] }}
                        </span>
                      </nuxt-link>
                      <p class="text-disabled mt-2.5">
                        {{ offerCar["status"] }}
                      </p>
                      <p class="mt-2.5 underlined-black leading-5">
                        {{ offerCar["text"] }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </dalacodeSlider>
          </client-only>
        </div>
      </div>
      <div class="container mt-10">
        <div class="flex">
          <Button
              btnWrapperSize="lg"
              btnWrapperType="black"
              btnHref="#"
              btnText="Все предложения"
          />
        </div>
      </div>
    </section>
    <div class="separator separator-lg"></div>
    <section class="callback py-20">
      <div class="container">
        <client-only>
          <Form class="flex flex-col gap-5" title="Закажите звонок">
            <div class="flex gap-10">
              <Input title="Имя *"/>
              <Input title="Телефон *" mask="+# (###) ### ##-##"/>
            </div>
            <div>
              <div class="flex gap-10">
                <CustomSelect :lists="questions"/>
                <div class="flex basis-1/2"></div>
              </div>
            </div>
            <div>
              <div class="mb-2 text-lg font-bold">
                г. Уральск, ул. Шолохова, 11
              </div>
              <div class="text-base">
                <a class="default-line" href="tel:+74954077977"
                >+7 (495) 407-79-77</a
                >
              </div>
            </div>
            <div class="separator separator-sm"></div>
            <div class="flex flex-col gap-10">
              <Checkbox id="agree"/>
              <Checkbox id="advertising"/>
            </div>
            <Button
                :isLink="false"
                btnWrapperSize="xl"
                btnWrapperType="black"
                btnText="Отправить заявку"
            />
          </Form>
        </client-only>
      </div>
    </section>
  </div>
</template>

<script>
import {Swiper} from "swiper/bundle";
import Button from "~/components/FormElements/Button.vue";
import Input from "~/components/FormElements/Input.vue";
import Checkbox from "~/components/FormElements/Checkbox.vue";
import CustomSelect from "~/components/FormElements/CustomSelect.vue";
import dalacodeSlider from "~/components/DalacodeSlider/Slider.vue";
import MultiSelect from "vue-multiselect";

export default {
  name: "IndexPage",
  head: {
    title: "Главная страница",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        content: "my website description",
      },
    ],
  },
  components: {
    Button,
    dalacodeSlider,
    MultiSelect,
    Input,
    CustomSelect,
    Checkbox,
  },
  async asyncData({$axios}) {
    const models = await $axios
        .get("http://localhost:8000/api/cars/models")
        .then((response) => response.data);

    return {models};
  },
  data() {
    return {
      model: [],
      questions: [
        {
          title: "Условия кредитования и страхования",
        },
        {
          title: "Автомобили по подписке Kia Flex",
        },
        {
          title: "Спецификация и стоимость автомобиля Kia",
        },
        {
          title: "Другое",
        },
      ],
      heroSlides: [
        {
          title: "K5",
          text: "K5 Text",
          image:
              "https://kia-altyncar.kz/wp-content/uploads/2022/06/k5-nash.jpg",
          side: "left",
          button: {
            visible: true,
            title: "Подробнее",
            to: "#",
          },
        },
        {
          title: "Seltos",
          text: "Seltos lorem lorem lorem lorem lorem lorem lorem",
          image:
              "https://kia-altyncar.kz/wp-content/uploads/2022/06/k5-nash.jpg",
          side: "right",
          button: {
            visible: true,
            title: "Подробнее",
            to: "#",
          },
        },
      ],
      onlineServices: [
        {
          title: "Запись на тест-драйв",
          to: "#",
          icon: "https://kia-altyncar.kz/wp-content/webp-express/webp-images/uploads/2021/04/steering-wheel.png.webp",
        },
        {
          title: "Запись на сервис",
          to: "#",
          icon: "https://kia-altyncar.kz/wp-content/webp-express/webp-images/uploads/2021/04/key.png.webp",
        },
        {
          title: "Конфигуратор",
          to: "#",
          icon: "https://kia-altyncar.kz/wp-content/webp-express/webp-images/uploads/2021/04/configurator.png.webp",
        },
      ],
      offerCars: [
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Участвуя в Бонусной программе, вы можете получать и накапливать бонусные баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Участвуя в Бонусной программе, вы можете получать и накапливать бонусные баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Участвуя в Бонусной программе, вы можете получать и накапливать бонусные баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Участвуя в Бонусной программе, вы можете получать и накапливать бонусные баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Участвуя в Бонусной программе, вы можете получать и накапливать бонусные баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Участвуя в Бонусной программе, вы можете получать и накапливать бонусные баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
        {
          title: "Кредитование Банк ЦентрКредит 11",
          image: "https://kia-altyncar.kz/wp-content/uploads/2021/05/bck.jpg",
          status: "Постоянная акция",
          isShow: true,
          to: "#",
          text: "Баллы за покупку товаров, работ и услуг и оплачивать ими последующие покупки",
        },
      ],
    };
  },
  methods: {
    heroSlider() {
      return new Swiper(".hero-slider-container", {
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: ".hero-arrow-next",
          prevEl: ".hero-arrow-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      });
    },
    selectValue() {
      return this.model;
    },
  },
  computed: {
    filteredModels() {
      if (process.client) {
        dalacodeSlider.methods.dalacodeSlider();
      }

      if (this.selectValue().slug === "all") {
        return this.models;
      }

      if (this.selectValue()) {
        return this.models.filter((item) => {
          return item.slug === this.selectValue().slug;
        });
      }

      return this.models;
    },

    modelsName() {
      const modelNames = [];
      const placeholder = {
        name: this.$i18n.t("select model"),
        slug: "all",
      };
      modelNames.push(placeholder);
      this.model = placeholder;
      this.models.map((model) => {
        modelNames.push({
          name: model.title,
          slug: model.slug,
        });
      });
      return modelNames;
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &-slider {
    &-item {
      &-left {
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
          bottom: 0;
          width: 50%;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.75), transparent);
          z-index: 1;
          display: none;
          @media screen and (min-width: 1199px) {
            display: block;
          }
        }
      }

      &-right {
        &::before {
          content: "";
          position: absolute;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          width: 50%;
          background: linear-gradient(-90deg, rgba(0, 0, 0, 0.75), transparent);
          z-index: 1;
          display: none;

          @media screen and (min-width: 1199px) {
            display: block;
          }
        }
      }
    }
  }
}

.hero-model {
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #000;
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0) 45%,
            #000 100%
    );
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 0;

    &-inner {
      transform: translateY(350px);
      justify-content: center;
      min-height: 400px;
    }

    &::after {
      background: linear-gradient(
              180deg,
              rgba(#05141f, 0) 80%,
              rgba(#05141f, 1) 100%
      );
    }

    &-bottom {
      flex-direction: column;
      align-items: flex-start;
    }

    &-padding {
      width: 100%;
      height: 350px;
      background: #05141f;
    }
  }
}
</style>
