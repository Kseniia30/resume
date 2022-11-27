import { NavLink } from "react-router-dom";
import styled from "styled-components";

//Layout

const LayoutList = styled.ul`
    list-style: none;
    display: flex;
`

const LayoutItem = styled.li`
    :not(:last-child) {
        margin-right: 10px;
    }
`

const LayoutNavLink = styled(NavLink)`
    color: darkblue;
    text-shadow: skyblue 2px 2px;
    text-decoration: none;

    &.active {
        text-decoration: underline;
        color: #32dfd7;;
        text-shadow: grey 2px 2px;
    }

    :focus:not(.active),
    :hover:not(.active) {
        color: lightgrey;
    }
`

export {LayoutList, LayoutItem, LayoutNavLink}

//Home

const HomeMainBox = styled.div`
    text-align: center;

    @media screen and (min-width: 1280px) {
        display: flex;
        flex-wrap: wrap;
    }
    
    
`
const HomeTextBox = styled.div`
    padding: 15px 30px;
    text-align: center;
    @media screen and (min-width: 1280px) {
        width: 50%;
    }
    
`

const Greeting = styled.h1`
    font-family: 'BhuTuka Expanded One', sans-serif;
    text-shadow: red 1px 2px 1px;
    margin-bottom: 20px;
`

const WhoAmI = styled.h2`
    color: darkred;
    margin-bottom: 15px;
`

const WhyDidI = styled.p`
    color: lightpink
`

const IconBox = styled.div`
    color: red;
    @media screen and (max-width: 1279px) {
        display: none;
    }
`

const Photo = styled.img`
    width: 300px;

    @media screen and (min-width: 480px) {
        width: 400px;
    }
    @media screen and (min-width: 768px) {
        width: 700px;
    }
    @media screen and (min-width: 1280px) {
        width: 500px;
    }
`

export {HomeMainBox, HomeTextBox, Greeting, WhoAmI, WhyDidI, IconBox, Photo}