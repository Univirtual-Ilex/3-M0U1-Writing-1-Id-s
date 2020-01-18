import React from 'react'
//Components
import Container from '../Container'
// Styles
import styled from 'styled-components'
import styles, {UiButtonsContainer} from './Actividad_styles'

//components
import {IRow, ICol} from '../Grid'
import IdCard from '../IdCard'
import IdForm from '../IdForm'
import ButtonUi from '../ButtonControlUI'
import ButtonCheck from '../ButtonCheck'
// eslint-disable-next-line
import Ilex from '../../App/variables'
import data from './Actividad_data'




const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='msjClick one time in each phrase to listen how pronounce them. Listen before start to resolve the exercise' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow px={3} py={1.7} w={99} align='center' justify='center'>
                { data.map(item => {
                    return (
                        <ICol w={20} key={item.id}>
                            <IdCard bgc={item.cardColor} info={item}/>
                            <IdForm />
                        </ICol>
                    )
                }) }
            </IRow>
            <ButtonCheck />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad