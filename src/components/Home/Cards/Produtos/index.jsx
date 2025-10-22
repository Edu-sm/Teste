import styled from "styled-components"
import { useProdutos } from "../../../../Context/CarrinhoContext";
import { useEffect, useState } from "react";

const ProdutosSection = styled.section`
    padding-top: 25px;
    .card-div{
        margin-top: 40px;
    }
    .descricao-produto{
        font-size: 12px;
    }

    .titulo-produto{
    font-size: 22px;
 }
`


export default function CardProdutos() {
    const { produtos, AdicionarAoCarrinho } = useProdutos();

    const [flash, setFlash] = useState(null);

    useEffect(() => {
        if (!flash) return;
        const t = setTimeout(() => setFlash(null), 1500); // 1.5s
        return () => clearTimeout(t);
    }, [flash]);

    const handleComprar = (id) => {
        AdicionarAoCarrinho(id)
        setFlash({ type: "success", text: "Adicionado com sucesso!" });
    };
    return (


        <ProdutosSection>
            {flash && (
                <div
                    className={`alert alert-${flash.type} position-fixed top-0 end-0 m-3`}
                    role="alert"
                    style={{ zIndex: 1050 }}
                >
                    {flash.text}
                </div>
            )}
            <h2 className="text-center titulo-produto">Produtos que estão bombando!</h2>
            <div className="row justify-content-center">
                {produtos.map(({ id, src, alt, titulo, descricao, preco }) =>
                    <div className="card card-div  col-md-4 col-lg-4 g-0 mx-5" style={{ width: "18rem" }}>

                        <img src={src} className="card-img-top" alt={alt} />
                        <div className="card-header" id={id}>
                            <h5 className="card-title">{titulo}</h5>
                            <p className="card-text descricao-produto">{descricao}</p>
                            <p className="card-text fw-bold">{`R$${preco},00`}</p>
                            <button onClick={() => handleComprar(id)} className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                )}
            </div>
        </ProdutosSection>
    )
}




