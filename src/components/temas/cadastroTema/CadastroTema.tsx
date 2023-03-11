import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { ChangeEvent, useEffect, useState } from 'react';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service1';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['token']>(
    (state) => state.token
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  useEffect(() => {
    if (token === '') {
      toast.error('Você precisa Logar Bonitão(a)',{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      navigate('/login');
    }
  }, [token]);

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function findById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      try {
        // sempre vai tentar aqui essa parte tipo cachorro magro.
        await put('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema cadastrado Aí Sim',{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } catch {
        // se der merda, encosta aqui véi.
        toast.error('Erro no cadastro, presta Atenção Amigão(a)',{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    } else {
      try {
        // sempre vai tentar aqui essa parte pega visão
        await post('/temas', tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success('Tema cadastrado Fechou meu mano(a)',{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      } catch {
        // se der merda, vem pra cá 
        toast.error('Erro no Cadastro, Olha a Descrição Meu Mano(a)',{
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    }
    back();
  }

  function back() {
    navigate('/temas');
  }

  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={onSubmit}>
          <Typography variant="h3" align="center">
            {/* if ternario (pesquisa no google)*/} 
            {tema.id !== 0 ? 'Edite o Tema' : 'Cadastre um Tema Rapidão'}
          </Typography>
          <TextField
            value={tema.descricao}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            name="descricao"
            id="descricao"
            label="Descrição do tema"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <Button variant="contained" type="submit" color="primary">
            Cadastrar
          </Button>
        </form>
      </Container>
    </>
  );
}

export default CadastroTema;