
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './IdCard_styles'

// Componente base
const IdCard_base = ({bgc, info, ...props}) => {
    return (
        <div {...props}>
            <div className="idContainer">
                <div className='logo'> <img src='./src/utp-logo.png' alt='Logo UTP'/></div>
                <div className='portrait'> <img src={ info.portrait } alt={ info.name + ' photography'} /></div>
                <div className='name'> {info.name} {info.surname}</div>
                <div className='program'> {info.program} </div>
                <div className='idNumber'> {info.idNumber}</div>
                <div className='type'> { info.idType }</div>
            </div>
        </div>
    )
}
const IdCard = styled(IdCard_base)`${ styles }`
export default IdCard
