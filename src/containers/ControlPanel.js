import React from 'react'
import styled from "styled-components";
// import Light from '../components/Controlpanel/LightControl'
import LoopPane from '../components/Controlpanel/LoopPane'
import ServicePane from '../components/Controlpanel/ServicesPane'


const ServiceStyle = styled.div`
position: absolute;
width: 1100px;
height: 552.97px;
left: 170px;
top: 333px;
border: 1px solid #BFBEBE;
`
const ControlPanel = () => {
    return (
        <ServiceStyle>
            {/* <ServicePane/> */}
            <LoopPane/>
        </ServiceStyle>
    )
}

export default ControlPanel
