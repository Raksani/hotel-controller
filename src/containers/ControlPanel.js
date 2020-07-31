import React from 'react'
import styled from "styled-components";
import LoopPane2 from '../components/Controlpanel/LoopPane2'


const ServiceStyle = styled.div`
position: absolute;
width: 1120px;
height: 580px;
left: 170px;
right: 170px;
top: 333px;
// border: 1px solid #BFBEBE;
align-items: center;
`
const ControlPanel = () => {
    return (
        <ServiceStyle>
            <LoopPane2/>
        </ServiceStyle>
    )
}

export default ControlPanel
