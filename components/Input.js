import { useState } from 'react';
import styled from 'styled-components';

const Input = ({ add }) => {

    const [name, setName] = useState('');

    const handleAddName = (e) => {
        e.preventDefault();
        add(name);
        setName('');
    }

    return (
        <Form onSubmit={handleAddName}>
            <InputBox
                type="text"
                placeholder="Search your pokemon"
                value={name}
                onChange={e => setName(e.target.value.toLowerCase())}
                required
            />
            <br />
            <Button>Search</Button>
        </Form>
    );
}

const Form = styled.form`
    margin-top: 100px;  
    display: flex;
`;

const InputBox = styled.input`
    margin-right: 10px;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    font-size: 1.5em;
    outline: none;
    color: white;

    ::placeholder{
        color: white;
    }
`;

const Button = styled.button`
    background-color: #ffcc01;
    border: 0.5px solid red;
    border-radius: 5px;
`;

export default Input;