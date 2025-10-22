import styled from "styled-components"
import CardProdutos from "./Produtos"

const categoria = [ 
    {nome: "Bolsa", src: "/images/categorias/bolsa.png"},
    {nome: "Calcados", src: "/images/categorias/calcados.png"},
    {nome: "Calcas", src: "/images/categorias/calcas.png"},
    {nome: "Camisetas", src: "/images/categorias/camisetas.png"},
    {nome: "Casacos", src: "/images/categorias/casacos.png"},
    {nome: "Oculos", src: "/images/categorias/oculos.png"},
    
]



const CardContainer = styled.div`
    padding-top: 25px;

 .titulo-card{
    font-size: 24px;
 }

`

export default function Cards() {
    return (

        <CardContainer className="container">
            <h2 className="text-center titulo-card">Busque por categoria:</h2>
            <div className="row g-0 justify-content-center my-5">
                {categoria.map(({src, nome, id}) => <div className="card col-sm-2 mx-2 my-3" style={{ width: "12rem" }} id={id} key={id}>
                    <img className="card-img-top" src={src} alt="Categoria: Bolsa" />
                    <div className="card-header text-bg-dark" >
                        <p className="text-center">{nome}</p>
                    </div>
                </div>)}
            </div>
            <div>
                <CardProdutos />
            </div>
        </CardContainer>

    )
}

