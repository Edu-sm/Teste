import styled from "styled-components"
import Header from "./Header"
import Carousel from "./Carousel"
import Cards from "./Cards"
import About from "./About"
import 'bootstrap-icons/font/bootstrap-icons.css'




const HomeSection = styled.section`

`

export default function Home() {

    return (
        <HomeSection>
            <Header />
            <Carousel />
            <Cards/>
            <About/>
        </HomeSection>
    )
}