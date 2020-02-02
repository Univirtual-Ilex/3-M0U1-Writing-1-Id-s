import { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
font-size:0.7em;
width:80%;
margin:auto;
color:${Ilex.textos};
font-weight:bold;
padding:1em 0;
.checkboxes{
    padding:0.5em 0;
}

form>div{
    padding:0.3em 0;
}

`
export const StyleCheckbox = css`
width:1em;
height:1em;
display: inline-block;
position: relative;
    &:checked::before{
        content:'';
        width:1.05em;
        height:1.05em;
        position: absolute;
        background-color: ${Ilex.verde};
        border-radius:0.2em;
        transform: scale(1.1,1.1)
    }
    &.error:checked::before{
        content:'';
        width:1.05em;
        height:1.05em;
        position: absolute;
        background-color: ${Ilex.color_rojo};
        border-radius:0.2em;
        transform: scale(1.1,1.1)
    }
    &::before{
        content:'';
        width:1.05em;
        height:1.05em;
        position: absolute;
        background-color: ${Ilex.dragItem};
        border-radius:0.2em;
        transform: scale(1.1,1.1)
    }

`

export default styles
    