import useSeleccionarMonedas from "../hooks/useSeleccionarMonedas"
import styled from "@emotion/styled"

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
const Formulario = () => {

    const [ seleccionarMonedas]=useSeleccionarMonedas()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        seleccionarMonedas()
    }
  return (
    <form>
        <InputSubmit
            type={'submit'}
            value={'cotizar'}
            onClick={handleSubmit }
        />
    </form>
  )
}

export default Formulario