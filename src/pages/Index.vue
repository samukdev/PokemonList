<template>
  <q-page class="container q-pb-xl">
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
      class="fit flex flex-center text-grey-7"
      v-else-if="searchText && pokemonList.length === 0"
      style="padding-top: 20vh"
    >
      Não há pokemons que correspondem a essa pesquisa :(
    </section>
    <q-infinite-scroll
      @load="loadMore"
      :offset="1000"
      scroll-target="body"
      v-else
    >
      <div
        class="row q-col-gutter-lg q-pa-md"
      >
        <div
          class="col-xs-12 col-sm-6 col-md-4"
          v-for="(pokemon,index) in pokemonList"
          :key="index"
        >
          <div
            class="poke-card-container"
          >
            <q-card
              bordered
              @click="openPokemonDetails(pokemon.id)"
              class="poke-card q-pa-none"
            >
                <q-card-section
                  style="background: url('/cardbg.svg'); background-size: cover"
                  class="q-pa-none flex flex-center"
                >
                  <q-img
                    :src="pokemon.imageUrl"
                    style="max-width: 200px; max-height: 200px"
                  />
                </q-card-section>
                <q-separator />
                <q-card-section class="q-pa-lg">
                  <div class="text-caption text-grey-6 text-uppercase">
                    ID: {{ pokemon.id || 'Undefined' }}
                  </div>
                  <div class="text-h6 text-capitalize">
                    {{ pokemon.name || 'Undefined' }}
                  </div>
                  <div class="row q-col-gutter-xs">
                    <div
                      v-for="type in pokemon.types"
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
            </q-card>
          </div>
        </div>
      </div>
      <template v-slot:loading v-if="!searchText">
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
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
  name: 'PageIndex',

  data: () => ({
    isLoading: true,
    nextUrl: null,
  }),

  computed: {
    getTypeClass() {
      return (type) => typeClassStrategy[type];
    },

    pokemonList() {
      return this.$store.getters['app/getPokemonList'];
    },

    searchText: {
      get() { return this.$store.getters['app/getSearchText']; },
      set(value) { this.$store.commit('app/setSearchText', value); },
    },

    filteredPokemonList() {
      if (!this.searchText) {
        return this.pokemonList;
      }

      // eslint-disable-next-line max-len
      return this.pokemonList.filter((pokemon) => pokemon.name.includes(this.searchText.toLowerCase()));
    },
  },

  watch: {
    searchText() {
      this.fetchPokemonList();
    },
  },

  methods: {
    async loadMore(index, done) {
      if (!this.searchText) {
        const nextUrl = await this.$store.dispatch('app/fetchPokemonList', { nextUrl: this.nextUrl, search: this.searchText });
        this.nextUrl = nextUrl;
        this.isLoadingMore = false;
        done();
      }
    },
    openPokemonDetails(id) {
      this.$router.push({ name: 'pokemon-details', params: { id } });
    },

    async fetchPokemonList() {
      this.isLoading = true;
      const nextUrl = await this.$store.dispatch('app/fetchPokemonList', { nextUrl: this.nextUrl, search: this.searchText });
      this.isLoading = false;
      this.nextUrl = nextUrl;
    },
  },

  mounted() {
    this.fetchPokemonList();
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

    &:hover {
      z-index: 2;
      transform: scale(1.01) translateY(-0.85rem);
      box-shadow: 0 10px 140px 0 rgb(130 136 171 / 30%);
      cursor: pointer;
    }
  }
</style>
