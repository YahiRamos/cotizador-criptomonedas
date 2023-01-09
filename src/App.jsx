import styled from "@emotion/styled"
import { useState,useEffect } from "react"
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"
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

  const [monedas,setMonedas]=useState({})
  const [cotizacion,setCotizacion]=useState({})
  const [cargando,setCargando]=useState(false)

  useEffect(()=>{
    if(Object.keys(monedas).length>0){
      let cotizarCriptomoneda=async ()=>{
        setCargando(true)
        setCotizacion({})
        let {moneda,criptomoneda}=monedas
        let urlAPI=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        let response=await fetch(urlAPI)
        let result=await response.json()
        setCotizacion(result.DISPLAY[criptomoneda][moneda])
        console.log(cotizacion)
        setCargando(false)
      }
      cotizarCriptomoneda()
    }

  },[monedas])
  
  return (

    <Container>
      <Image
        src={criptoImage}
        alt='cripto-image'
      />
      <div>
      <Heading>Cotizador de precios de Criptomonedas</Heading>
      <Formulario
        setMonedas={setMonedas}
      />
      {cargando && <Spinner/>}
      {monedas.moneda &&<Resultado cotizacion={cotizacion}/>}
      </div>
    </Container>
  )
}

export default App