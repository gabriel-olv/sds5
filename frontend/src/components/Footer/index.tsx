const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-my-light">
            <div className="container">
                <p className="text-dark">App desenvolvido por <a style={{ textDecoration: "none" }} href="https://github.com/gabriel-olv" target="_blank" rel="noreferrer">Gabriel de Oliveira</a></p>
                <p className="text-dark"><small><strong>Semana Spring React</strong><br />
                    Evento promovido pela escola DevSuperior: <a style={{ textDecoration: "none" }} href="https://instagram.com/devsuperior.ig" target="_blank" rel="noreferrer">@devsuperior.ig</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;