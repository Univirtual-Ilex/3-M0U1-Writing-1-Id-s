import React from 'react'
//Components
import Container from '../Container'
// Styles
import styled from 'styled-components'
import styles from './Actividad_styles'
import {IRow, ICol} from '../Grid'
// eslint-disable-next-line
import Ilex from '../../App/variables'




const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>
            <IRow px={3} py={3}>
                <ICol w={25}>a</ICol>
                <ICol w={25}>b</ICol>
                <ICol w={25}>c</ICol>
                <ICol w={25}>d</ICol>
            </IRow>

            
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad