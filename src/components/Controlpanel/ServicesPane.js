import React from 'react'
import styled from "styled-components"


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
`

const Icon = styled.div`
position: absolute;
left: 0%;
right: 55.56%;
top: 0%;
bottom: 59.53%;
`

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

color: #7D7987;

mix-blend-mode: normal;

`

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
`
const ServicePane = () => {
    return (
        <PaneContainer> 
            <TextContainer>
                <Icon>
                    <svg width="80" height="69" viewBox="0 0 80 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.7827 9.8695C40.7827 9.13752 40.154 8.5434 39.3761 8.5434C31.2565 8.5434 24.6501 14.7718 24.6501 22.4269C24.6501 23.1589 25.2788 23.753 26.0567 23.753C26.8345 23.753 27.4633 23.1589 27.4633 22.4269C27.4633 16.2344 32.808 11.1954 39.3763 11.1954C40.154 11.1954 40.7827 10.6028 40.7827 9.8695Z" fill="#010002"/>
                    <path d="M18.74 22.4269C18.74 26.9778 20.2999 31.2808 23.2519 34.8705C23.266 34.8878 23.2815 34.9049 23.2969 34.9222C29.4532 42.9791 27.9229 46.8114 27.9229 46.818C27.5938 47.4809 27.8976 48.27 28.6008 48.5816C28.7936 48.6664 28.996 48.7075 29.1957 48.7062C29.7245 48.7062 30.231 48.4238 30.4699 47.9424C30.7244 47.4333 32.7357 42.6873 25.505 33.2752C25.4726 33.2341 25.4403 33.1943 25.4037 33.1573C22.8848 30.0543 21.5542 26.3468 21.5542 22.4256C21.5542 12.6819 29.9636 4.75496 40.297 4.75496C50.6304 4.75496 59.0402 12.6819 59.0402 22.4256C59.0402 26.3573 57.7013 30.0795 55.1429 33.2168C47.9079 42.6356 50.0007 47.4359 50.2624 47.953C50.5928 48.6015 51.4044 48.8668 52.0993 48.5736C52.7941 48.2805 53.1091 47.5008 52.8151 46.8379C52.7981 46.7994 51.1863 42.8902 57.3974 34.8028C60.3116 31.2277 61.8532 26.9486 61.8532 22.4269C61.8532 11.2206 52.1835 2.10406 40.2972 2.10406C28.4108 2.10406 18.74 11.222 18.74 22.4269Z" fill="#010002"/>
                    <path d="M52.8502 53.8115V52.6844C52.8502 50.8876 51.2988 49.4263 49.3944 49.4263H30.4406C28.5349 49.4263 26.9849 50.8876 26.9849 52.6844V53.8115C26.9849 55.6069 28.5349 57.0695 30.4406 57.0695H49.396C51.3003 57.0695 52.8502 55.6082 52.8502 53.8115ZM29.7978 53.8115V52.6844C29.7978 52.3503 30.0861 52.0783 30.4406 52.0783H49.396C49.7503 52.0783 50.0388 52.3501 50.0388 52.6844V53.8115C50.0388 54.1456 49.7505 54.4175 49.396 54.4175H30.4406C30.0861 54.4175 29.7978 54.1457 29.7978 53.8115Z" fill="#010002"/>
                    <path d="M32.7176 59.0852C31.9398 59.0852 31.311 59.6793 31.311 60.4113V63.9134C31.311 64.4332 31.633 64.904 32.1338 65.1201L39.7134 68.3808C39.8991 68.4604 40.0974 68.5002 40.297 68.5002C40.5024 68.5002 40.7078 68.4578 40.8976 68.373L48.4983 64.9916C48.9906 64.7728 49.3043 64.3061 49.3043 63.7929V60.4128C49.3043 59.6808 48.6757 59.0867 47.8977 59.0867C47.1198 59.0867 46.4912 59.6808 46.4912 60.4128V62.9534L40.2872 65.7143L34.124 63.0622V60.4128C34.124 59.6779 33.4954 59.0852 32.7176 59.0852Z" fill="#010002"/>
                    <path d="M73.0645 46.3885C73.5258 45.7997 73.3922 44.9695 72.7677 44.5346L63.2261 37.9018C62.6003 37.4669 61.7211 37.5916 61.2598 38.1816C60.7985 38.7703 60.9321 39.6005 61.5565 40.0354L71.0981 46.6682C71.3499 46.8433 71.6425 46.9268 71.9321 46.9268C72.3626 46.9281 72.7888 46.7412 73.0645 46.3885Z" fill="#010002"/>
                    <path d="M17.1579 9.17585C17.4096 9.35089 17.7022 9.43442 17.9919 9.43442C18.4236 9.43442 18.8484 9.24747 19.1256 8.89477C19.5869 8.30603 19.4533 7.47585 18.8288 7.04094L9.07197 0.259528C8.4475 -0.176687 7.56695 -0.0494444 7.10565 0.5393C6.64435 1.12935 6.77654 1.95953 7.40239 2.39444L17.1579 9.17585Z" fill="#010002"/>
                    <path d="M17.601 37.4455L7.40395 44.5345C6.77948 44.9694 6.6459 45.7995 7.1072 46.3883C7.38284 46.741 7.80901 46.9279 8.24089 46.9279C8.53055 46.9279 8.82314 46.8444 9.0749 46.6694L19.2719 39.5805C19.8964 39.1455 20.03 38.3154 19.5687 37.7266C19.1044 37.1366 18.2255 37.0119 17.601 37.4455Z" fill="#010002"/>
                    <path d="M61.973 6.60351C61.3486 7.03842 61.215 7.8686 61.6763 8.45734C61.9519 8.81003 62.3781 8.99698 62.81 8.99698C63.0996 8.99698 63.3922 8.91215 63.644 8.73842L72.7707 2.39469C73.3951 1.95978 73.5287 1.1296 73.0674 0.540857C72.6061 -0.0478878 71.7269 -0.175131 71.1011 0.261085L61.973 6.60351Z" fill="#010002"/>
                    <path d="M78.5935 22.1392H67.8353C67.0575 22.1392 66.4287 22.7333 66.4287 23.4653C66.4287 24.1972 67.0573 24.7914 67.8353 24.7914H78.5935C79.3712 24.7914 80 24.1972 80 23.4653C80 22.7333 79.3712 22.1392 78.5935 22.1392Z" fill="#010002"/>
                    <path d="M13.9144 23.4653C13.9144 22.7333 13.2858 22.1392 12.5079 22.1392H1.40657C0.628793 22.1392 0 22.7333 0 23.4653C0 24.1972 0.62862 24.7914 1.40657 24.7914H12.508C13.2842 24.7912 13.9144 24.1972 13.9144 23.4653Z" fill="#010002"/>
                    </svg>
                </Icon>
            <Title>Light Control</Title>
            <Detail>To turn on / off all the lights</Detail>
            </TextContainer> 
        </PaneContainer>
    )
}

export default ServicePane