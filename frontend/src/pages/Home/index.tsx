import Footer from 'components/Footer';
import Navbar from 'components/Navbar'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Navbar />
        <div className="container bg-my-light d-block p-3 m-auto shadow-sm rounded">
            <div className="jumbotron">
                <h1 className="display-4">DS Vendas</h1>
                <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                <hr />
                <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
            </div>
            <Link className="btn btn-primary btn-lg my-3" to='/dashboard'>Acessar dashboard</Link>
        </div>
        <Footer />
        </>
    );
}

export default Home;