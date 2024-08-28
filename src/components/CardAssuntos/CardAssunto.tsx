function CardAssunto() {
    return (
        <div className="card">
            <h3 className="titleCard">O que está acontecendo?</h3>
            <p className="titleParagrafo">
                <span className="time">Esportes - Há 45 min</span>
                Assuntos Sobre esportes
            </p>
            <p className="titleParagrafo">
                <span className="time">Assuntos do Momento em Brasil</span>
                Assuntos do Momento
            </p>
            <p className="titleParagrafo">
                <span className="time">Músicas - Assuntos do Momento</span>
                Assuntos Sobre Músicas
            </p>
            <p className="titleParagrafo">
                <span className="time">Cinema - Assuntos do Momento</span>
                Assuntos Sobre Filmes e Cinema
            </p>

            <div className="more">
            <a href="#">Mostrar Mais</a>
            </div>
        </div>
    );
}
export default CardAssunto;