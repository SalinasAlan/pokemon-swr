import { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Pokemon from '../components/Pokemon';

const Index = () => {

    const [pokemon, setPokemon] = useState();

    const pokemonName = () => {
        return pokemon;
    }

    const addPokemonName = (name) => {
        setPokemon(name);
    }

    return (
        <Constainer>
            <Image src="/pokemonLogo.png" alt="Pokemon Image" />
            <Input add={addPokemonName} />
            {
                pokemon != null ?
                    <Pokemon pokemonName={pokemonName} />
                    :
                    null
            }
        </Constainer>
    );
}

const Constainer = styled.div`
    width: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #24499a;
`;

const Image = styled.img`
    margin-top: 30px;
    width: 50%;
`;

export default Index;