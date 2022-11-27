import styled from "styled-components";
 //Title

const TitleBox = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

const StyledTitle = styled.h2`
    text-shadow: red 1px 2px 1px;
    margin-bottom: 10px;

    @media screen and (min-width: 480px) {
        font-size: 30px;
    }
`

const StyledName = styled.h3`
    text-decoration: underline;

    @media screen and (min-width: 480px) {
        font-size: 20px;
    }
`

const StyledProfession = styled.h4`
    font-size: 13px;

    @media screen and (min-width: 480px) {
        font-size: 14px;
    }
`

export { TitleBox, StyledTitle, StyledName, StyledProfession }

//Address

const AddressBox = styled.address`
    color: white;
    margin-bottom: 20px;
    @media screen and (min-width: 480px) {
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1280px) {
    }
`

const AddressList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const AddressItem = styled.li`
    :not(:last-child) {
        margin-right: 10px;
    }
`

const AddressLink = styled.a`
    color: green;
    :hover, :focus {
        color: red;
    }
`

export {AddressBox, AddressList, AddressItem, AddressLink}

//Table

const StyledTable = styled.table`
    color: white;
`

const StyledLink = styled.a`
    color: green;

    :hover, :focus {
        color: red
    }
`

const StyledTh = styled.th`
    border: 3px solid darkgreen
`

const StyledTd = styled.td`
    border: 3px solid darkgreen;
    padding: 15px;
`
const StyledFirst = styled.td`
    width: 120px;
    border: 3px solid darkgreen;
    vertical-align: top;
    padding: 10px;
`
const TableList = styled.ul`
    margin-left: 20px;
`
const ExpirienceTime = styled.p`
    font-size: 14px;
    color: grey;
`
const EducationLink = styled.a`
    color: green;
    :hover, :focus {
        color: red;
    }
`
export {StyledTable, StyledLink, StyledTh, StyledTd, StyledFirst, TableList, ExpirienceTime, EducationLink}