import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`

position: absolute;
width: 100%;
height: 60px;
left: 0;
top: 0;
margin-top: -8px;
margin-left: -8px;
background: #242331;
display: block;
`

const Text = styled.div`

position: absolute;
width: auto;
height: 40px;
left: 544px;
top: 20px;
margin-left: -8px;

font-family: 'Exo';
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.15em;

color: #FDFFFC;
`
const NavBar = () => {
    return (
        <Bar>
            <Text>
                Nova Hotel Resort & Spa
            </Text>
        </Bar>
    )
}

export default NavBar
