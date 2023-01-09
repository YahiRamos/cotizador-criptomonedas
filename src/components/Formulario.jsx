import styled from "@emotion/styled"
import { useEffect,useState } from "react"
import { monedas } from "../data/seleccionOpciones"
import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from "./Error"
const InputSubmit= styled.input`
    background-color:#9497ff;
    border:none;
    width:100%;
    padding:15px;
    color:#fff;
    font-weight:700;
    text-transform:uppercase;
    font-size:27px;
    border-radius:10px;
    transition:background-color .4s ease;
    &:hover{
        background-color:#7A7DFE;
        cursor:pointer;
    }
`
const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([])
    const [criptomoneda,SelectCriptomoneda]=useSelectMonedas('Seleccione una Criptomoneda',criptos)
    const [moneda,SelectMoneda]=useSelectMonedas('Seleccione una moneda:',monedas)
    const [error,setError]=useState(false)

    useEffect(() => {
      const consultarAPI=async()=>{
        const urlAPI='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=5&tsym=USD'
        const request=await fetch(urlAPI)
        const response=await request.json()
        //a traves de la funcion map, creamos un array de objetos
        //en el que cada objeto le asignaremos la información
        //mas importante de la criptomoneda
        const arrayCriptos=response.Data.map(cripto=>{
            const objetoCripto={
                id:cripto.CoinInfo.Name,
                nombre:cripto.CoinInfo.FullName
            }
            return objetoCripto
        })
        setCriptos(arrayCriptos)
      }
      consultarAPI()
    }, [])

    const handleSubmit=e=>{
      e.preventDefault()
      if([moneda,criptomoneda].includes('')){
        setError(true)
        return
      }
      setError(false)
      setMonedas({
        moneda,
        criptomoneda
      })
    }

  return (
    <>
      {error && <Error>todos los campos son requeridos</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMoneda/>
        <SelectCriptomoneda/>
        <InputSubmit
            type={'submit'}
            value={'cotizar'}
        />
      </form>
    </>
  )
}

export default Formulario