<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent q-py-lg">
      <div
        style="max-width: 400px"
        class="q-mx-auto"
      >
        <q-input
          style="border-radius: 4ex"
          class="search-input bg-white"
          v-model.trim.lazy="searchText"
          ref="search"
          :input-class="$refs.search ? null : 'text-grey-5'"
          :debounce="500"
          rounded
          borderless
          placeholder="Nome do Pokemon..."
        >
          <template #prepend>
            <q-icon class="q-ml-md" name="search" />
          </template>
          <template #append>
            <div class="q-mr-md" />
          </template>
        </q-input>
      </div>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  computed: {
    searchText: {
      get() { return this.$store.getters['app/getSearchText']; },
      set(value) { this.$store.commit('app/setSearchText', value); },
    },
  },
};
</script>

<style scoped lang="scss">
.search-input {
  transition: all .2s ease-in;
  box-shadow: 0 10px 100px 0 rgb(130 136 171 / 30%);

  &:hover, & input:focus {
    transform: scale(1.05);
    box-shadow: 0 10px 100px 0 rgb(130 136 171 / 35%);
  }

}
</style>
