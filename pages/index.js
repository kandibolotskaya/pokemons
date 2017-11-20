import React from 'react'
import Layout from '../components/Layout'
import {Card, Col, Input, Row} from 'reactstrap'
import Pagination from 'react-js-pagination'
import {changePage, filterByTypes, loadPokemonList} from '../actions'
import PokemonTable from '../components/PokemonTable'
import PokemonTypesForm from '../components/PokemonTypesForm'
import withRedux from 'next-redux-wrapper'
import makeStore from '../store'


class Index extends React.Component {

    state = {
        searchQuery: '',
    }

    componentDidMount() {
        this.props.dispatch(loadPokemonList(this.props.activePage))
    }

    render() {

        let {pokemons, activePage, count} = this.props

        if (this.state.searchQuery) {
            pokemons = pokemons.filter(pokemon => {
                return pokemon.name.includes(this.state.searchQuery)
            })
        }

        return (
            <Layout>
                <form className={'my-3'}>
                    <Input type='search' placeholder='search' onChange={this.handleSearch.bind(this)}/>
                </form>
                <Row>
                    <Col md={9}>
                        <PokemonTable isLoading={this.props.isLoading} pokemons={pokemons}/>
                    </Col>
                    <Col md={3}>
                        <Card className={'p-4'}>
                            <PokemonTypesForm isLoading={this.props.isLoading}
                                              onChange={this.filterByTypes.bind(this)}/>
                        </Card>
                    </Col>
                </Row>

                <div className='pt-4 mx-auto'>
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={count / 10}
                        linkClass="page-link"
                        itemClass="page-item"
                        linkClassPrev="prev"
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>

            </Layout>
        )
    }

    filterByTypes(e) {
        this.props.dispatch(filterByTypes(e.target.value, this.props.pokemonsList))
    }

    handlePageChange(activePage) {
        this.props.dispatch(changePage(activePage))

    }

    handleSearch(e) {
        this.setState({searchQuery: e.target.value})
    }

}

export default withRedux(makeStore,
    (state) => ({
        activePage: state.activePage,
        count: state.count,
        pokemons: state.pokemons,
        pokemonsList: state.pokemonsList,
        pokemonsTypes: state.pokemons,
        isLoading: state.isLoading
    }))(Index)