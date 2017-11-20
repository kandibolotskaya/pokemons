import { Form, FormGroup, Input, Label } from 'reactstrap'
import * as React from 'react'

const pokemonTypes = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost',
    'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown',
    'shadow']

export default ({onChange,isLoading}) =>
    <Form>

        {pokemonTypes.map((type, index) =>
            <FormGroup check key={index}>
                <Label check>
                    <Input type="radio" disabled={isLoading} value={type} onChange={onChange} name="type"/>{' '}
                    {type}
                </Label>
            </FormGroup>
        )}


    </Form>