import useSWR from 'swr';
import Card from './Card';
import Spinner from './Spinner'

const List = ({ pokemonName }) => {

    const name = pokemonName();

    const fetcher = url => fetch(url).then(res => {
        return res.json();
    })


    const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher)
    if (error) return <div>Pokemon doesn't exist 😥</div>;
    if (!data) return <Spinner />;
    return <Card key={1} pokemonData={data} />;
}

export default List;