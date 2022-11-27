import {SideBarBox, SideBarImg, SideBarTitle, SideBarList, SideBarItem, SideBarLink} from "./SideBar.styled"

const SideBar = () => {
    return <SideBarBox>
        <SideBarImg src="https://optimistic-noether-719469.netlify.app/img/img.png" alt="Kseniia Shykova" />
        <div>
            <SideBarTitle>Contact Information</SideBarTitle>
            <address>
                <SideBarList>
                    <SideBarItem><SideBarLink href="tel:+380636805185">+380636805185</SideBarLink></SideBarItem>
                    <SideBarItem><SideBarLink href="mailto:kellyshikova3004@gmail.com">kellyshikova3004@gmail.com</SideBarLink></SideBarItem>
                    <SideBarItem><SideBarLink href="https://www.linkedin.com/in/kseniia-shykova-940868257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQm9M70EmSXyrlmATGU0XTg%3D%3D">Linkedin</SideBarLink></SideBarItem>
                    <SideBarItem><SideBarLink href="https://github.com/Kseniia30">Github</SideBarLink></SideBarItem>
                    <SideBarItem><p>Chuguev, Kharkiv region, Ukraine</p></SideBarItem>
                </SideBarList>
            </address>
            <SideBarTitle>Tech skills</SideBarTitle>
            <SideBarList>
                <SideBarItem>HTML5</SideBarItem>
                <SideBarItem>CSS3</SideBarItem>
                <SideBarItem>SASS</SideBarItem>
                <SideBarItem>JavaScript</SideBarItem>
                <SideBarItem>React</SideBarItem>
                <SideBarItem>Redux</SideBarItem>
                <SideBarItem>Node.js</SideBarItem>
                <SideBarItem>Software</SideBarItem>
            </SideBarList>
            <SideBarTitle>Soft skills</SideBarTitle>
            <SideBarList>
                <SideBarItem>adaptive</SideBarItem>
                <SideBarItem>teamwork</SideBarItem>
                <SideBarItem>organizing</SideBarItem>
            </SideBarList>
            <SideBarTitle>Languages</SideBarTitle>
            <SideBarList>
                <SideBarItem>English - Intermediate</SideBarItem>
                <SideBarItem>Ukrainian - Native</SideBarItem>
                <SideBarItem>Russian - Native</SideBarItem>
            </SideBarList>
        </div>
    </SideBarBox>
}
export default SideBar