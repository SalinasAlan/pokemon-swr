import styled from 'styled-components';
import Link from 'next/link'

const Card = ({ pokemonData }) => {

    return (
        <CardContainer>
            <Image src={pokemonData.sprites.front_default} />
            <Link href={`/${pokemonData.name}`} >
                <a>Details</a>
            </Link>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    text-align: center;
    justify-content: center;
    color: white;
`;

const Image = styled.img`
    width: 100%;
`;

export default Card;