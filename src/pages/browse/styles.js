import styled from 'styled-components';

// importando o link para fazer a rota das playlist
// importamos aqui pq eh possivel estilizar um componente react chamando por funcao
// veja no item Playlist
import { Link } from 'react-router-dom';

// Importando um Styled-Component de outro componente (Loading) para
// formatá-lo conforme necessidade no corrente Componente
import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 11px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 40px;

  ${Spinner} {
    height: 24px;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
`;

// Passamos o LINK do react-router-dom como param do styled para customiza-lo
export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 250px;
  text-decoration: none;

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 15px;
    color: #b3b3b3;
  }

  &:first-child {
    margin: 0;
  }

  &:hover img {
    opacity: 0.4;
  }
`;
