import { CHANGE_POKEMON_PAGE, FILTER_POKEMONS_BY_TYPES, GET_POKEMON_LIST } from '../actions/index'

export const initialState = {
    pokemons: [],
    isLoading: true,
    pokemonList: [],
    activePage: 1,

}

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_POKEMON_LIST + '_PENDING':
        return {
            ...state,
            isLoading: true,

        }
    case GET_POKEMON_LIST + '_FULFILLED':
        return {
            ...state,
            isLoading: false,
            count: action.payload.count,
            pokemons: action.payload.pokemons,
            pokemonsList: action.payload.pokemons

        }
    case CHANGE_POKEMON_PAGE:
        return {
            ...state,
            pokemons: [],
            activePage: action.payload
        }

    case FILTER_POKEMONS_BY_TYPES:
        return {
            ...state,
            pokemons: action.payload
        }
    default:
        return state
    }
}

