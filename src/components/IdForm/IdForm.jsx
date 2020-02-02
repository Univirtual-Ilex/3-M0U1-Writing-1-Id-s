//Import
import React from 'react'
import styled from 'styled-components'
import styles, {StyleCheckbox} from './IdForm_styles'

//Components
import {
    ICol as Col, 
    IRow as Row} from '../Grid'
import InputWords from '../InputWords'

export const Checkbox = styled.input.attrs(props=>({type:'checkbox'}))`
    ${StyleCheckbox}
`

// Componente base
const IdForm_base = ({name, surname, idnumber, program, idtype,...props}) => {
    return (
        <div {...props}>
            <form>
            <Row justify='space-between'>
                <Col w={40}>Name</Col>
                <Col w={50}><InputWords w={100} answer={name}/></Col>
            </Row>

            <Row justify='space-between'>
                <Col w={40}>Surname</Col>
                <Col w={50}><InputWords w={100} answer={surname}/></Col>
            </Row>
            <Row justify='space-between'>
                <Col w={40}>ID Number</Col>
                <Col w={50}><InputWords w={100} answer={idnumber}/></Col>
            </Row>
            <Row justify='space-between'>
                <Col w={100}>Program / Department </Col>
                <Col w={100}><InputWords w={100} answer={program}/></Col>
            </Row>
            <Row className='checkboxes'>
                <Col w={100}>ID type</Col>
                <Col w={100}>
                    <span> Administrative staff <Checkbox name='administrative' /></span>
                    <span> Student <Checkbox name='student' /> </span>
                    <span> Teacher <Checkbox name='teacher' /></span>
                    <span> Graduated <Checkbox name='graduated' /></span>
                </Col>
            </Row>

            </form>
        </div>
    )
}
const IdForm = styled(IdForm_base)`${ styles }`
export default IdForm
