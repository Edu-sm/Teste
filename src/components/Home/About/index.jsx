import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';
const AboutSection = styled.section`

   

    .h4-color{
        color: #DAFF01;
    }

    .icon-color{
        color: #DAFF01;
    }
`

export default function About() {
    return (

        <AboutSection className='bg-dark text-light pb-4 mt-5'>
            <h1 className='text-center pt-3'>Conheça todas as nossas facilidades!</h1>

            <div className='d-flex flex-xxl-row flex-column align-items-center justify-content-center mt-5 gap-5 '>
                <div className='div-style d-flex gap-3'>
                    <p><i className="bi bi-x-diamond fs-1 icon-color"></i></p>
                    <div>
                        <h4 className='h4-color'>Pague pelo pix</h4>
                        <p>Ganhe 5% OFF em pagamentos via PIX</p>
                    </div>
                </div>
                <div className='div-style d-flex gap-3'>
                    <p><i className="bi bi-arrow-repeat fs-1 icon-color"></i></p>
                    <div>
                        <h4 className='h4-color'>Troca Grátis</h4>
                        <p>Fique livre para trocar em até 30 dias.</p>
                    </div>
                </div>
                <div className='div-style d-flex gap-3'>
                    <p><i className="bi bi-flower1 fs-1 icon-color"></i></p>
                    <div>
                        <h4 className='h4-color'>Sustentabilidade</h4>
                        <p className='text-wrap' style={{width: "260px"}}>Moda responsável, que respeita o meio ambiente.</p>
                    </div>
                </div>
            </div>



        </AboutSection>)
}