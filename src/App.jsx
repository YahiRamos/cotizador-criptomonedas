import styled from "@emotion/styled"
import Formulario from "./components/Formulario"
import criptoImage from './img/imagen-criptos.png'


//los styled components se declaran antes de el componente principal
//el nombre de estos componentes se define igual en mayusculas

const Container=styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  @media(min-width:992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`
const Heading=styled.h1`
  font-family:'Lato',sans-serif;
  color:#fff;
  text-align:center;
  font-weight:700;
  margin-top:80px;
  margin-bottom:50px;
  font-size:40px;
  &::after{
    content:'';
    width:250px;
    height:10px;
    background-color:#66A2FE;
    display:block;
    margin:10px auto 0 auto;
  }
`
const Image=styled.img`
  max-width:400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`
const App = () => {
  return (

    <Container>
      <Image
        src={criptoImage}
        alt='cripto-image'
      />
      <div>
      <Heading>Cotizador de precios de Criptomonedas</Heading>
      <Formulario/>
      </div>
    </Container>
  )
}

export default App