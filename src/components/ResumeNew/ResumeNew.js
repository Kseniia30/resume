import MainPart from "./MainPart/MainPart"
import { ResumeNewBox } from "./ResumeNew.styled"
import SideBar from "./SideBar/SideBar"

const ResumeNew = () => {
    return <ResumeNewBox>
        <SideBar />
        <MainPart/>
    </ResumeNewBox>
}

export default ResumeNew