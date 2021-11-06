import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas
                        por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de
                        dados fornecidos por um backend construído com Spring Boot
                        que acessa um banco de dados PostgreSQL.</p>
                    <p>
                        O layout da aplicação foi construído em React, utilizando
                        todas as melhores práticas de desenvolvimento frontend.
                    </p>
                    <Link to="/dashboard" 
                        className="btn btn-primary btn-lg">Acessar Dashboard</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}