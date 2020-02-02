//Import
import React from 'react'
import styled from 'styled-components'
import styles, {StyleCheckbox} from './IdForm_styles'

//Components
import {
    ICol as Col, 
    IRow as Row} from '../Grid'
import InputWords from '../InputWords'
import { useState } from 'react'

export const Checkbox = styled.input.attrs(props=>({type:'checkbox'}))`
    ${StyleCheckbox}
`

// Componente base
const IdForm_base = ({name, surname, idnumber, program, idtype,...props}) => {
    const [checkError, setcheckError] = useState(true)

    const changeError =(val) => {
        setcheckError(val)
    }
    const validate = (event) => {
        event.persist()
        console.log(event.target.name)
        console.log(idtype)
        if (event.target.name === idtype) {
            changeError(true)
        } else {
            event.target.checked = false
            // changeError(false)

        }
        console.log('validating this event ->', event)
    }

    return (
        <div {...props}>
            <form>
            <Row justify='space-between'>
                <Col w={40}>Name</Col>
                <Col w={50}><InputWords w={100} answer={name} /></Col>
            </Row>

            <Row justify='space-between'>
                <Col w={40}>Surname</Col>
                <Col w={50}><InputWords w={100} answer={surname} /></Col>
            </Row>
            <Row justify='space-between'>
                <Col w={40}>ID Number</Col>
                <Col w={50}><InputWords w={100} answer={idnumber} /></Col>
            </Row>
            <Row justify='space-between'>
                <Col w={100}>Program / Department </Col>
                <Col w={100}><InputWords w={100} answer={program} /></Col>
            </Row>
            <Row className='checkboxes'>
                <Col w={100}>ID type</Col>
                <Col w={100}>
                    <label> Administrative Staff <Checkbox name='Administrative Staff' answer={idtype} onChange={validate} className={checkError ? 'ok' : 'error'} /></label>
                    <label> Student <Checkbox name='Student' answer={idtype} onChange={validate} className={checkError ? 'ok' : 'error'}/> </label>
                    <label> Teacher <Checkbox name='Teacher' answer={idtype} onChange={validate} className={checkError ? 'ok' : 'error'}/></label>
                    <label> Graduated <Checkbox name='Alumnus' answer={idtype} onChange={validate} className={checkError ? 'ok' : 'error'}/></label>
                </Col>
            </Row>

            </form>
        </div>
    )
}
const IdForm = styled(IdForm_base)`${ styles }`
export default IdForm
