import { HomeMainBox, HomeTextBox, Greeting, WhoAmI, WhyDidI, IconBox, Photo } from "./Pages.styled"
import { FaHandPeace } from "react-icons/fa";

const HomePage = () => {
    return <HomeMainBox>
        <HomeTextBox>
            <Greeting>Hello! <br/> My name is Kseniia Shikova)</Greeting>
            <WhoAmI>I am a Juniour FrontEnd Developer</WhoAmI>
            <WhyDidI>I created this web-site as a test, but here you can see my resume</WhyDidI>
            <IconBox>
                <FaHandPeace style={{ width: "150px", height: "auto", marginTop:"60px" }} />
            </IconBox>
        </HomeTextBox>
        <Photo src="https://optimistic-noether-719469.netlify.app/img/img.png" alt="me"/>
    </HomeMainBox>
}
export default HomePage