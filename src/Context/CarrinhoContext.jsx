import { createContext, useContext, useEffect, useState } from "react";
import produtosJson from "../mocks/produtos.json"
import { useNavigate } from "react-router-dom";
export const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
    const produtos = produtosJson;
    const [items, setItems] = useState(() => {
        const storage = localStorage.getItem("carrinho")
        return storage ? JSON.parse(storage) : [];
    })

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(items))
    }, [items])

    function AdicionarAoCarrinho(id) {
        const produto = produtos.find((value) => value.id == id)
        setItems([...items, produto])
    }
   
    const Finalizar = () => {
        setItems([])
    }



    function RemoverDoCarrinho(id) {
        setItems(prev => prev.filter(p => p.id !== id));
    }
    return (
        <CarrinhoContext.Provider value={{ produtos, items, AdicionarAoCarrinho, RemoverDoCarrinho, Finalizar }}>
            {children}
        </CarrinhoContext.Provider>
    )

}
export function useProdutos() {
    return useContext(CarrinhoContext);
}