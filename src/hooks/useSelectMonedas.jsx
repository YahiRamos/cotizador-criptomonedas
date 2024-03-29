import styled from "@emotion/styled"
import { useState } from "react"

const Label=styled.label`
  color:#fff;
  font-family:'Lato',sans-serif;
  display:block;
  font-size:27px;
  font-weight:700;
  margin:15px 0;
`
const Select=styled.select`
  padding:15px;
  width:100%;
  font-size:15px;
  text-align:center;
  border-radius:10px;
  margin-bottom:15px;
`

const useSelectMonedas = (label,opciones) => {
  const [state,setState]=useState('')
  const SelectMonedas=()=>(
    <>
    <Label>{label}</Label>
    <Select
      value={state}
      onChange={e=>setState(e.target.value)}
    >
      <option value={''}>-- Seleccione --</option>
      {opciones.map(opcion=>(
        <option
          key={opcion.id}
          value={opcion.id}
        >
          {opcion.nombre}
        </option>
      ))}
    </Select>
    </>
  )
  return [state,SelectMonedas]
}
export default useSelectMonedas