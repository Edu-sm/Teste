import { Link } from "react-router-dom";
import styled from "styled-components";

const BodyColor = styled.body`

    .erro-container{
        background-color: #333535;
    }
    img{
        width: 15rem;
    }
    .cor-texto{
        color: #DAFF56;
    }
    .cor-botao{
        background-color: #DAFF56;
        color: black;
    }
`
export default function Error404() {
    return (
        <BodyColor className="bg-light">
             <section className="container-fluid card rounded-5  d-flex flex-column text-center erro-container mt-5 justify-content-center" style={{ height: "50rem" }}>
                <img src="/images/meteora.png" className="container pb-5"></img>
                <div className="container-fluid card justify-content-center container rounded-5 bg-dark" style={{ width: "20rem", height: "20rem" }}>
                    <h1 className="fs-2 fw-bold cor-texto">Error 404</h1>
                    <p className="text-light fw-bold fs-5 pb-4">página não encontrada</p>
                    <Link to="/" className="text-info text-decoration-none mt-3 d-block"><button className="btn cor-botao fw-bold">Voltar para página inicial</button></Link>
                </div>
            </section>
        </BodyColor>
    )

}
