import styled from 'styled-components';
import { Div,  } from '../../styles';

const PaginatorContainer = styled(Div)`
    display: flex; 
    justify-content: center;
`;

const StarshipsListContainer = styled(Div)`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 150px; 
`;

const StarshipsName = styled.h2`
    text-align: center;
`;
export { PaginatorContainer, StarshipsListContainer, StarshipsName};