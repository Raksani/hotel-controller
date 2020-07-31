import React from "react";
import styled from "styled-components";
/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import services from "./pane-data";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

/**
 * Our React component where we display data
 * -----------------------------
 */
const PaneContainer = styled.div`
position: absolute;
left: 0%;
right: 76.36%;
top: 0%;
bottom: 52.44%;

background: #FFFFFF;
/* drop shadow */
box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
border-radius: 20px;

`

const TextContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 169.25px;
  left: 40px;
  top: 46px;
  border-style: solid;
`;
const Icon = styled.div`
  position: absolute;
  left: 0%;
  right: 55.56%;
  top: 0%;
  bottom: 59.53%;
`;
const Detail = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 47.86%;
  bottom: 22.6%;

  font-family: Muli;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  color: #7d7987;

  mix-blend-mode: normal;
`;

const Title = styled.div`
  position: absolute;
  left: 50.56%;
  right: 2.78%;
  top: 2.36%;
  bottom: 68.1%;

  font-family: Muli;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  /* or 104% */

  color: #000000;

  mix-blend-mode: normal;
`;

function LoopPane() {
  return (
      <div>
      {services.map((service, index) => (
        <div key={index}>
        <PaneContainer>
        <TextContainer className="service-text-container">
          <Icon>
            <h2>ICON</h2>
          </Icon>
          <Title>{service.id}</Title>
          <Detail>{service.detail}</Detail>
          <p>{service.switch}</p>
        </TextContainer>
        </PaneContainer>
        </div>
      ))}
      </div>
  );
}

export default LoopPane;
