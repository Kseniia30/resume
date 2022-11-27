import styled from "styled-components"

const MainBox = styled.div`
    padding: 10px;
`

const InfoBox = styled.div`
    background-color: beige;
    padding: 20px 40px;
    margin-top: 20px;
`
const Name = styled.h1`
    @media screen and (max-width: 767px) {
        color: #a619dd;
    }
    color: #550674;
    margin-bottom: 20px;
    text-align: center;
`

const Specialization = styled.p`
    @media screen and (max-width: 767px) {
        color: #a619dd;
    }
    text-align: center;
    color: #550674;
    margin-bottom: 10px;
`

const SummaryText = styled.p`
    color: #64acba;
    text-align: justify;
`

const MainTitle = styled.h2`
    color: #18c621;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 30px;
`

const MainList = styled.ul`
    list-style: none;
`

const MainItem = styled.li`
    color: #64acba;

    :not(:last-child) {
        margin-bottom: 5px;
    }
`

const MainLink = styled.a`
    color: inherit;

    :focus, :hover {
        color: red;
    }
`

const ExperienceList = styled.ul`
    list-style: none;
`

const Link = styled.a`
    color: #3483c9;
`

const Dates = styled.p`
    font-size: 14px;
    opacity: 0.6;
`

export {MainBox, InfoBox, Name, Specialization, SummaryText, MainTitle, MainList, MainItem, MainLink, ExperienceList, Link, Dates}