import Link from 'next/link';
import styled from 'styled-components';

const Details = ({ name, weight, image, abilities }) => {
    return (
        <Constainer>
            <DetailsBox>
                <Header>
                    <Link href='/'>
                        <Svg xmlns="http://www.w3.org/2000/Svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="40px">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </Svg>
                    </Link>
                </Header>
                <Image src={image} />
                <Info>
                    <p>
                        Name: {name}
                    </p>
                    <p>
                        Weight: {weight}
                    </p>
                    <p>Abilities:</p>
                    <ul>
                        {
                            abilities.map((gruop, index) => {
                                return <li key={index}>{gruop.ability.name}</li>
                            })
                        }
                    </ul>
                </Info>
            </DetailsBox>
        </Constainer>
    );
}

const Constainer = styled.div`
    width: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #24499a;
    color: white;
`;

const Svg = styled.svg`
    width: 40px;
    cursor: pointer;

    :hover{
        color: #ffcc01;
    }
`;

const DetailsBox = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas:
        "header header"
        "image details";
`;

const Header = styled.div`
    grid-area: header;
    align-self: center;
`;

const Image = styled.img`
    width: 150%;
    justify-self: center;   
    align-self: center;
    grid-area: image;
`;

const Info = styled.div`
    justify-self: center;
    align-self: center;
    grid-area: details;
`;

export async function getServerSideProps({ query }) {
    const name = query.name;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();

    return {
        props: {
            name: data.name,
            weight: data.weight,
            image: data.sprites.front_default,
            abilities: data.abilities
        }
    }
}

export default Details;