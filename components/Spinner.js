import styled, { keyframes } from 'styled-components';

const Spinner = () => {
    return <SpinnerContainer />
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite;
`;



export default Spinner;