//Import
import React from 'react'
import styled from 'styled-components'
import styles, {StyleCheckbox} from './IdForm_styles'

//Components
import Input from '../InputWords'
import {
    ICol as Col, 
    IRow as Row} from '../Grid'

export const Checkbox = styled.input.attrs(props=>({type:'checkbox'}))`
    ${StyleCheckbox}
`

// Componente base
const IdForm_base = ({...props}) => {
    return (
        <div {...props}>
            <form>
            <Row justify='space-between'>
                <Col w={40}>Name</Col>
                <Col w={50}><Input w={100}/></Col>
            </Row>

            <Row justify='space-between'>
                <Col w={40}>Surname</Col>
                <Col w={50}><Input w={100}/></Col>
            </Row>
            <Row justify='space-between'>
                <Col w={40}>ID Number</Col>
                <Col w={50}><Input w={100}/></Col>
            </Row>
            <Row justify='space-between'>
                <Col w={100}>Program / Department </Col>
                <Col w={100}><Input w={100}/></Col>
            </Row>
            <Row className='checkboxes'>
                <Col w={100}>ID type</Col>
                <Col w={100}>
                    <span> Administrative staff <Checkbox name='administrative'/></span>
                    <span> Student <Checkbox name='student'/> </span>
                    <span> Teacher <Checkbox name='teacher'/></span>
                    <span> Graduated <Checkbox name='graduated'/></span>
                </Col>
            </Row>

            </form>
        </div>
    )
}
const IdForm = styled(IdForm_base)`${ styles }`
export default IdForm
