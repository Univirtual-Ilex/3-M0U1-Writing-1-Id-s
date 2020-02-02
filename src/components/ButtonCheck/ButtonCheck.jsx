
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonCheck_styles'

// Componente base
const ButtonCheck_base = ({children, ...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean'>
               {children ? children : 'Check'}
            </button>
        </div>
    )
}
const ButtonCheck = styled(ButtonCheck_base)`${ styles }`
export default ButtonCheck
