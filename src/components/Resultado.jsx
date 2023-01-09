import styled from "@emotion/styled"

const Container=styled.div`
    color:#fff;
    font-family:'Lato',sans-serif;
    display:flex;
    align-items:center;
    gap:1rem;
    margin-top:15px;
`
const Imagen=styled.img`
    display:block;  
    width:200px;
`
const Texto=styled.p`
    font-size:15px;
    span{
        font-weight:700;
    }

`
const Precio=styled.p`
    font-size:25px;
        span{
            font-weight:900;
        }

`
const Resultado = ({cotizacion}) => {
    let {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=cotizacion
    return (
        <Container>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt={'imagen_Cripto'}/>
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Porcentaje de variación en las últimas 24 horas: <span>{`${CHANGEPCT24HOUR} %`}</span></Texto>
                <Texto>Ultima actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Container>
    )
}

export default Resultado