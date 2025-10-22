import styled from "styled-components"
import { useProdutos } from "../../../Context/CarrinhoContext";
import { Link } from "react-router-dom";

const ContentStyled = styled.section`
    .tamanho-imagem{
        width: 10rem;
        
    }
   .sumario{
    font-weight: 400;
   }
   .descricao{
    font-weight: 100;
   }
   .cor-preco{
    color: #DAFF56;
   }
   .cor-linha{
    border-color: #DAFF56;
   }
`


export default function CarrinhoContent() {
    const { items, RemoverDoCarrinho, Finalizar } = useProdutos();
    const produto = items
    const somaPreco = produto.reduce((acc, produto) => acc + produto.preco, 0)
    return (
        <ContentStyled className="container-fluid">
            <p className="text-center h1 fs-2 pb-4">Carrinho de compras</p>
            <div className="container-fluid d-flex flex-column flex-lg-row gap-3">
                <div className="container bg-black text-center rounded-4">
                    <p className="fs-5 h3 text-light p-5">Detalhes da compra</p>
                    <div className="container  d-flex flex-column gap-4">
                        {produto.map(({ id, src, alt, titulo, descricao, preco }) =>

                            <>
                                <div className="container d-flex flex-lg-row  flex-column text-light" key={id}>
                                <img src={src} className="img-fluid tamanho-imagem container pb-5" />
                                <div className="container d-flex flex-lg-row flex-md-row flex-column gap-2">
                                    <div>
                                        <p className="fs-4">{titulo}</p>
                                        <p className="fs-6 descricao">{descricao}</p>
                                    </div>
                                    <div className="align-content-center ">
                                        <p className="fw-bold cor-preco mx-4">{`R$ ${preco},00`}</p>
                                    </div>

                                    <button type="button" className="btn text-light mx-5" onClick={() => RemoverDoCarrinho(id)}><i className="bi bi-trash3-fill"></i></button>

                                </div>

                            </div>
                            <hr className="my-4  cor-linha opacity-75"></hr>
                            </>
                            
                        )}
                    </div>
                </div>
                <div className="container bg-black rounded-4" style={{ width: "22rem", height: "15rem" }}>
                    <h4 className="text-light fs-5 text-center mt-3 pb-2 sumario">Sumário</h4>
                    <div className="d-flex flex-column mx-3 mt-3">
                        <p className="text-light">{produto.length > 0 ? produto.length : "Nenhum"} {`${produto.length > 1 ? "Itens" : "Item"} na sacola`}</p>
                        <p className="fw-bold cor-preco">{`Total: R$ ${somaPreco},00`}</p>
                    </div>
                    <div className="d-flex gap-2 mt-4 justify-content-center">
                        <Link to={"/"}><button className="btn btn-danger">Cancelar</button></Link>
                        <Link to={"/"}><button className="btn btn-primary" onClick={Finalizar}>Finalizar compra</button></Link>
                    </div>
                </div>
            </div>
        </ContentStyled>

    )
}