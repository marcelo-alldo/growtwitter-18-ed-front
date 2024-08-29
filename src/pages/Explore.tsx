import ExploreStyled from '../components/explore/ExploreStyled';
import DefaultLayout from '../config/layout/DefaultLayout';

function Explore() {
  return (
    <DefaultLayout>
      <ExploreStyled>
        <h2>Explorar</h2>
      </ExploreStyled>
      <hr />

      <ExploreStyled>
        <small>Esportes - Há 45 min</small>
        <b>Assuntos Sobre esportes</b>
      </ExploreStyled>
      <ExploreStyled>
        <small>Assuntos do Momento em Brasil</small>
        <b>Assuntos do Momento</b>
      </ExploreStyled>
      <ExploreStyled>
        <small>Músicas - Assuntos do Momento</small>
        <b>Assuntos Sobre Músicas</b>
      </ExploreStyled>
      <ExploreStyled>
        <small>Cinema - Assuntos do Momento</small>
        <b>Assuntos Sobre Filmes e Cinema</b>
      </ExploreStyled>
      <ExploreStyled>
        <small>Entretenimento - Assuntos do Momento</small>
        <b>Assuntos Sobre Entretenimento</b>
      </ExploreStyled>
      <ExploreStyled>
        <small>Assunto do Momento em Porto Alegre</small>
        <b>Assuntos do Momento em Porto Alegre</b>
      </ExploreStyled>
      <ExploreStyled>
        <small>Daphne -Principal Assunto do Momento</small>
        <b>Assuntos Sobre a Daphne</b>
      </ExploreStyled>
    </DefaultLayout>
  );
}
export default Explore;
