
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './ButtonControlUI_styles'

// Componente base
const ButtonControlUI_base = ({click, tooltip, icon,...props}) => {
    return (
        <div {...props}>
            <button className='btn-clean' onClick={() => window.location.href = click}>
                <i className={ icon }/>
            </button>
        </div>

    )
}
const ButtonControlUI = styled(ButtonControlUI_base)`${ styles }`
export default ButtonControlUI
