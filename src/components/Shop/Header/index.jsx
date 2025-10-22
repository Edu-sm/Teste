import { Link } from "react-router-dom"
import styled from "styled-components"

const NavSection = styled.section`
    .cor-fundo{
        background-color: black;
    }
`

export default function ShopHeader() {

    return (
        <NavSection>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="/images/meteora.png" className="px-2"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/carrinho'>Carrinho</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="*">Promoções</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            <div className="container-auto">
                <img src="/images/bannerCarrinho.png" className="img-fluid w-100 pb-3"/>
            </div>
        </NavSection>

    )
}