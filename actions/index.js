export const GET_POKEMON_LIST = 'GET_POKEMON_LIST'
export const CHANGE_POKEMON_PAGE = 'CHANGE_POKEMON_PAGE'
export const FILTER_POKEMONS_BY_TYPES = 'FILTER_POKEMONS_BY_TYPES'

import generateTable from '../modules/pokeapi'

export function loadPokemonList (page) {
    return {
        type: GET_POKEMON_LIST,
        payload: generateTable({limit: 10, offset: 10 * page}),
    }
}

export function changePage (page) {

    return dispatch => {
        dispatch({
            type: CHANGE_POKEMON_PAGE,
            payload: page
        })
        dispatch(loadPokemonList(page))
    }

}

export function filterByTypes (pokemonType, pokemons) {

    if (pokemonType) {
        pokemons = pokemons.filter(pokemon => {
            return pokemon.types.find(type => {
                return type.type.name === pokemonType
            })
        })
    }
    return {
        type: FILTER_POKEMONS_BY_TYPES,
        payload: pokemons
    }

}