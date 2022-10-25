import React, {useEffect, useContext} from 'react';
import StarshipsContext from '../../context/StarshipsContext';
import {RingLoader} from 'react-spinners';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import {PaginatorContainer, StarshipsListContainer, StarshipsName} from './starships_styles';
const Starships = () => {
  const {getStarships, setPage, page, starships, isLoading, error, setStarshipURL } = useContext(StarshipsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getStarships();
  }, [page]);

  return (
    <>
      <PaginatorContainer>
      <Stack spacing={2}>
        <Pagination
          onClick={(event) => setPage(event.target.innerText)}
          color="primary"
          count={3} 
          variant="outlined" 
          shape="rounded" />
      </Stack>
      </PaginatorContainer>

      <StarshipsListContainer>
       {!isLoading && starships?.map((starship, index) => 
          <div 
            key={index} 
            onClick={() => {
              const id = starship.url.split("starships/")[1].replaceAll('/', '');
              navigate(`/starship/${id}`);
            }}>
              <StarshipsName>{starship.name}</StarshipsName>
              <p>{starship.model}</p>
            </div>)} 
            <div 
            style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>

          {isLoading && <RingLoader 
            color="#808080"
            />}

          {!isLoading && error && <p>error</p>}
      </div>

      </StarshipsListContainer>
    </>
  )
}

export default Starships;