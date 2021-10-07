/* eslint-disable no-plusplus */
export async function fetchPokemonList(context, { nextUrl, search }) {
  let fetchPokemonUrl = null;

  if (search) {
    fetchPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1118';
  } else {
    fetchPokemonUrl = nextUrl || 'https://pokeapi.co/api/v2/pokemon?limit=48';
  }

  const pokemonUrlListPromise = await fetch(fetchPokemonUrl);
  const pokemonUrlList = await pokemonUrlListPromise.json();

  if (search) {
    // eslint-disable-next-line max-len
    pokemonUrlList.results = pokemonUrlList.results.filter((pokemon) => pokemon.name.includes(search.toLowerCase()));
  }

  const pokemonListPromises = pokemonUrlList.results.map(({ url }) => fetch(url)
    .then((r) => r.json()));

  const pokemonFullList = (await Promise.all(pokemonListPromises));

  const pokemonList = pokemonFullList.map((pokemon) => {
    const {
      id, name, sprites, types,
    } = pokemon;

    const imageUrl = sprites.front_default;

    return {
      id,
      name,
      types,
      imageUrl,
    };
  });

  if (search) {
    context.commit('setPokemonList', pokemonList);
  } else if (nextUrl) {
    // eslint-disable-next-line dot-notation
    context.commit('setPokemonList', [...context.getters.getPokemonList, ...pokemonList]);
  } else {
    context.commit('setPokemonList', pokemonList);
  }
  // context.commit('setPokemonList', [...data]); console.log(data);

  return pokemonUrlList.next;
}

export async function fetchPokemonDetails(context, { id }) {
  const fetchPokemonUrl = (pokemonId) => `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  await fetch(fetchPokemonUrl(id))
    .then((response) => response.json())
    .then((data) => {
      context.commit('setPokemonDetails', data);
    });
}
