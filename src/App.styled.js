import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 10px;

    @media screen and (min-width: 480px) {
        width: 460px;
        padding: 15px;
    }

    @media screen and (min-width: 768px) {
        width: 748px;
        padding: 20px;
    }

    @media screen and (min-width: 1280px) {
        width: 1200px;
    }
`

export {Container}