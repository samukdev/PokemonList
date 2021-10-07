<template>
  <q-page class="q-pa-md">
    <section
      class="fit flex flex-center"
      style="padding-top: 10vh"
      v-if="isLoading"
    >
      <q-spinner
        color="primary"
        size="4em"
        :thickness="3"
      />
    </section>
    <section
      v-else
      class="container"
    >
      <div class="q-py-lg">
        <q-btn
          icon="arrow_back"
          no-caps
          rounded
          flat
          label="Voltar a listagem"
          @click="$router.push({ name: 'home' })"
        />
      </div>
      <div
        class="row"
      >
        <q-card
          bordered
          class="poke-card col q-pa-none"
        >
          <q-card-section
            class="q-pa-none"
            :horizontal="!$q.platform.is.mobile"
          >
            <q-card-section
              style="background: url('/cardbg.svg'); background-size: cover"
              class="q-pa-none flex flex-center"
            >
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                animated
                control-color="red-3"
                navigation
                padding
                arrows
                autoplay
                style="max-height: 300px; box-shadow: none;"
                class="bg-transparent text-white q-pa-none shadow-1 rounded-borders"
              >
                <q-carousel-slide
                  v-for="(sprite, key) in filteredSprites"
                  :key="key"
                  :name="`${ key }`"
                  class="fit flex flex-center"
                  style="min-width: 300px;"
                >
                  <q-img
                    :src="sprite"
                    style="fit"
                  />
                </q-carousel-slide>
              </q-carousel>
            </q-card-section>
            <q-separator :vertical="!$q.platform.is.mobile"/>
            <q-card-section class="q-pa-lg">
              <div class="text-body2 text-grey-6 text-uppercase">
                ID: {{ pokemonDetails.id || 'Undefined' }}
              </div>
              <div class="text-h4 text-weight-medium text-capitalize q-mb-sm">
                {{ pokemonDetails.name || 'Undefined' }}
              </div>
              <div class="row q-col-gutter-xs">
                <div
                  v-for="type in pokemonDetails.types"
                  :key="type.slot"
                >
                  <div
                    class="text-body2 text-capitalize rounded-borders q-py-xs q-px-sm"
                    :class="getTypeClass(type.type.name)"
                    style="border-radius: 100ex; color: white"
                  >
                    {{ type.type.name }}
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
const typeClassStrategy = {
  normal: 'bg-blue-grey',
  fire: 'bg-orange-9',
  water: 'bg-blue-7',
  grass: 'bg-green-8',
  electric: 'bg-amber-6',
  ice: 'bg-light-blue-4',
  fighting: 'bg-red-9',
  poison: 'bg-purple-5',
  ground: 'bg-brown-5',
  flying: 'bg-purple-3',
  psychic: 'bg-pink-8',
  bug: 'bg-lime-8',
  rock: 'bg-lime-9',
  ghost: 'bg-deep-purple-4',
  dark: 'bg-blue-grey-10',
  dragon: 'bg-deep-purple-10',
  steel: 'bg-blue-grey-5',
  fairy: 'bg-purple-3',
};

export default {
  name: 'pokemonDetailsPage',

  data: () => ({
    slide: '0',
    isLoading: true,
  }),

  computed: {
    getTypeClass() {
      return (type) => typeClassStrategy[type];
    },

    pokemonDetails: {
      get() { return this.$store.getters['app/getPokemonDetails']; },
    },

    filteredSprites() {
      if (this.pokemonDetails && this.pokemonDetails.sprites) {
        return [
          this.pokemonDetails.sprites.front_default,
          this.pokemonDetails.sprites.back_default,
        ];
      }

      return [];
    },
  },

  methods: {
    async fetchPokemonDetails() {
      this.isLoading = true;

      const { id } = this.$route.params;
      await this.$store.dispatch('app/fetchPokemonDetails', { id });

      this.isLoading = false;
    },
  },

  mounted() {
    this.fetchPokemonDetails();
  },
};
</script>

<style scoped lang="scss">
  .poke-card-container {
    position: relative;
  }

  .poke-card {
    border-radius: 2ex;
    transition: all .25s ease-out;
    box-shadow: 0 10px 120px 0 rgb(130 136 171 / 20%);
  }
</style>
