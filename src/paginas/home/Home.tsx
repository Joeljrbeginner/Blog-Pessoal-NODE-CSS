import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { Button } from '@material-ui/core';
import react from 'react';
import './Home.css';


function Home() {
    return (
        <>
        <div className='banner'>
            <Container>
              <Grid container>
                  <Grid xs={6}>
                    <h1>bem vindo ao blog</h1>
                    <h3>Digite Algo</h3>
                    <Button className='botão1'variant="contained">Ver postagens</Button>
                    <Button variant="contained">Criar postagens</Button>
                    </Grid>
                  <Grid xs={6}>
                    <img src='C:\Users\Joeljr\Pictures\Saved Pictures' alt=''width="450px" />
                  </Grid>
              </Grid>
            </Container>
        </div>
        </>
    )
}

export default Home