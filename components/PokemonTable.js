import React from 'react'
import { Table } from 'reactstrap'
import ReactLoading from 'react-loading'

export default ({pokemons, isLoading, className}) => {

    if (isLoading) {
        return <div className={'text-center p-5 d-flex justify-content-center'}>
            <ReactLoading type="spinningBubbles" color="#444"/>
        </div>
    } else {
        if (!pokemons.length) {
            return <div className={'text-center h3 p-3 animated fadeInUp'}>Nothing is here</div>
        }
    }

    return <Table bordered className={className+' animated fadeInUp'}>
        <thead>
            <tr>
                <th>image</th>
                <th>name</th>
                <th>weight</th>
                <th>height</th>
            </tr>
        </thead>
        <tbody>

            {pokemons.map((pokemon, index) => {
                return <tr key={index}>
                    <td><img src={pokemon.image}/></td>
                    <td>{pokemon.name}</td>
                    <td>{pokemon.weight} kg</td>
                    <td>{pokemon.height} dm</td>
                </tr>
            })}
        </tbody>
    </Table>
}

