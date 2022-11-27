import styled from "styled-components"

const SideBarBox = styled.div`
    padding: 10px;
    margin-right: 20px;
`

const SideBarImg = styled.img`
    width: 300px;
    height: auto;
    margin-bottom: 20px;
`

const SideBarTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 30px;
    color: #18c621;
`

const SideBarList = styled.ul`
    list-style: none;
`

const SideBarItem = styled.li`
    :not(:last-child) {
        margin-bottom: 5px;
    }
    color: #64acba;
`

const SideBarLink = styled.a`
    color: inherit;

    :focus, :hover {
        color: red;
    }
`

export {SideBarBox, SideBarImg, SideBarTitle, SideBarList, SideBarItem, SideBarLink}