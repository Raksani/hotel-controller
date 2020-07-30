import React from "react";
import styled from "styled-components";

const TemperatureContainer = styled.div`
position: absolute;
left: 292px;
right: 752px;
top: 15px;
bottom: 43px;
overflow-x: 292px;
overflow-y: 15px;
`

const TemperatureText = styled.div`
position: absolute;
left: 8px;
bottom: 81px;

font-family: Exo, sans-serif;
font-style: normal;
font-weight: 100;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.1em;

color: #242331;

vertical-align: center;
`
const Celsius = styled.div`
position: absolute;
left: 51px;
right: 36.5;
top: 58px;
bottom: 10px;

font-family: Exo;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 53px;
/* identical to box height */
display: flex;
align-items: center;

color: #636169;

width: 97px;
height: 53px;
`
const CelsiusIcon = styled.div`
position: absolute;
left: 0px;
top: 42.48px;
right: 148px;
bottom: 10.2px;
`
const Line = styled.div`

position: absolute;
right: 0px;
left: 184.5px;

`

const Temperature = () => {
    let temp = '25'
    return (
        <TemperatureContainer>
            <TemperatureText>Temperature</TemperatureText>
            <CelsiusIcon>
            <svg width="27.49" height="67.8" viewBox="0 0 28 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.9587 41.0452V7.67321C20.9587 3.70218 17.73 0.482971 13.7474 0.482971C9.76468 0.482971 6.53605 3.70218 6.53605 7.67321V41.0459C6.53605 42.1481 6.02583 43.1841 5.16275 43.873C1.98474 46.4098 -0.0394364 50.3238 0.00133712 54.7081C0.0702964 62.1158 6.12257 68.18 13.5516 68.283C21.2333 68.3895 27.4939 62.2127 27.4939 54.5778C27.4939 50.2507 25.4826 46.3925 22.3415 43.8806C21.4757 43.1883 20.9587 42.152 20.9587 41.0452Z" fill="#D7EFFA"/>
            <path d="M18.659 46.6221L18.2972 46.3993C17.2304 45.7425 16.5809 44.5816 16.5809 43.3314V13.0808L13.8663 12.4193L10.915 13.0808V43.3316C10.915 44.5818 10.2655 45.7426 9.19869 46.3995L8.83693 46.6223C6.01549 48.3591 4.34938 51.3667 4.38031 54.6676C4.4271 59.6983 8.56889 63.8479 13.6132 63.9179C13.6581 63.9185 13.7484 63.9188 13.7485 63.9188C16.4107 63.9188 18.9032 62.8192 20.7043 60.8354C22.1441 59.2493 22.9957 57.2017 23.1038 55.0651C23.2784 51.6121 21.5881 48.4252 18.659 46.6221Z" fill="#F26E91"/>
            <path d="M18.6585 46.6221L18.2967 46.3993C17.2299 45.7424 16.5804 44.5816 16.5804 43.3314V13.0808L13.0229 12.4193V44.6957C13.0229 45.9459 13.6725 47.1067 14.7393 47.7636L15.101 47.9863C18.0302 49.7895 19.7205 52.9763 19.5458 56.4291C19.4377 58.5656 18.5861 60.6134 17.1463 62.1993C16.5823 62.8206 15.9503 63.355 15.2667 63.7961C17.3463 63.46 19.2502 62.4359 20.7037 60.8351C22.1435 59.249 22.9951 57.2014 23.1032 55.0649C23.2779 51.6121 21.5876 48.4252 18.6585 46.6221Z" fill="#E05C7E"/>
            <path d="M16.5798 13.0808V7.67325C16.5798 6.07954 15.2493 4.78992 13.6376 4.85063C12.1045 4.90847 10.9138 6.21296 10.9138 7.74255V13.0807H16.5798V13.0808Z" fill="#A29AA5"/>
            <path d="M13.6395 4.85063C13.0051 4.87451 12.4314 5.11448 11.9744 5.49292C12.6142 6.01133 13.0239 6.80137 13.0239 7.6854V13.0807H16.5818V7.67326C16.5816 6.07955 15.2511 4.78992 13.6395 4.85063Z" fill="#8C818F"/>
            <path d="M14.78 18.4135H16.4501C16.4966 18.4135 16.542 18.4093 16.5869 18.4034V16.3772C16.542 16.3713 16.4966 16.3671 16.4501 16.3671H14.7801C14.2132 16.3671 13.7539 16.8252 13.7539 17.3903C13.7538 17.9554 14.2132 18.4135 14.78 18.4135Z" fill="#F26E91"/>
            <path d="M14.773 21.2772C14.2061 21.2772 13.7468 21.7353 13.7468 22.3003C13.7468 22.8654 14.2061 23.3235 14.773 23.3235H16.4431C16.4896 23.3235 16.535 23.3194 16.5799 23.3134V21.2873C16.535 21.2813 16.4896 21.2772 16.4431 21.2772H14.773Z" fill="#F26E91"/>
            <path d="M14.7746 38.0537H16.4448C16.4913 38.0537 16.5368 38.0496 16.5816 38.0436V36.0174C16.5368 36.0114 16.4913 36.0073 16.4448 36.0073H14.7748C14.2079 36.0073 13.7485 36.4654 13.7485 37.0305C13.7484 37.5956 14.2079 38.0537 14.7746 38.0537Z" fill="#F26E91"/>
            <path d="M14.7746 33.1435H16.4448C16.4913 33.1435 16.5368 33.1394 16.5816 33.1334V31.1072C16.5368 31.1012 16.4913 31.0971 16.4448 31.0971H14.7748C14.2079 31.0971 13.7485 31.5552 13.7485 32.1203C13.7484 32.6854 14.2079 33.1435 14.7746 33.1435Z" fill="#F26E91"/>
            <path d="M14.7746 28.2334H16.4448C16.4913 28.2334 16.5368 28.2292 16.5816 28.2233V26.1972C16.5368 26.1912 16.4913 26.1871 16.4448 26.1871H14.7748C14.2079 26.1871 13.7485 26.6452 13.7485 27.2103C13.7485 27.7753 14.2079 28.2334 14.7746 28.2334Z" fill="#F26E91"/>
            </svg>
            </CelsiusIcon>
            <Celsius>{temp} °C</Celsius>
            <Line>
            <svg width="2" height="122" viewBox="0 0 2 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.999512" x2="0.999512" y2="121.004" stroke="#BFBEBE"/>
            </svg>
            </Line>
        </TemperatureContainer>
    )
}

export default Temperature