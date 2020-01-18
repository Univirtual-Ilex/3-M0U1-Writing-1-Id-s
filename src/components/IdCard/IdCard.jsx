
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './IdCard_styles'

// Componente base
const IdCard_base = ({...props}) => {
    return (
        <div {...props}>
            Creado el componente IdCard
        </div>
    )
}
const IdCard = styled(IdCard_base)`${ styles }`
export default IdCard
