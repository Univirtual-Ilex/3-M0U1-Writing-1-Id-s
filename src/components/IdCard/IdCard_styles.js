import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    background-image: url(${props => props.info.cardColor});
    background-repeat: repeat-y;
    height:16.5em;
    width:10.125em;
    border:2px solid #fff;
    border-radius: 1em;
    padding:1em;
    text-align:right;
    margin:auto;
    color:#fff;
    font-weight:bold;
    font-family:${Ilex.titulos};
    box-shadow: 0 0 0.5em 0 rgba(0,0,0,0.1);
    position: relative;
    div{
        font-size:0.89em;
        text-shadow: 0 0.1em 0.2em rgba(0,0,0,0.3);
    }
    .portrait{
        padding:0.5em 0;
        img{ 
            display: inline-block;
            border-radius:1em;
        }
    }
    .program{
        margin:0.1em 0;
        padding:0.3em;
    }
    .type{
        text-align:center;
        color:${Ilex.violeta2};
        text-shadow:none;
        background-color: #fff;
        padding:0.5em;
        border-radius:0.5em;
        position: absolute;
        width:80%;
        bottom:1em;
        
    }
`

export default styles
    