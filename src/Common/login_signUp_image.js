import React from 'react'
import styled from 'styled-components'

const ImgContainer = styled.div`
    width: 50%;
    height: 100vh;
    position: relative;
    @media (max-width: 600px) {
        width: 100%;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
`;

const ImageTitle = styled.div`
    position: absolute;
    font-weight: bolder;
    font-size: 30px;
    color: white;
    top: 50%;
    width: 100%;
    text-align: center;
`

const ImageBlock = () => {
    return (<ImgContainer>
        <Image src={require('../images/login-register.jpg')} alt='login' />
        <ImageTitle> WELCOME GYM-e-DIARY </ImageTitle>
    </ImgContainer>)
}

export default ImageBlock