import { checkDates } from "../../Resume/ResumeTable"
import {MainBox, InfoBox, Name, Specialization, SummaryText, MainTitle, MainList, MainItem, MainLink, ExperienceList, Link, Dates} from "./MainPart.styled.js"

const MainPart = () => {
    return <MainBox>
        <Name>KSENIIA SHYKOVA</Name>
        <Specialization>JUNIOUR FRONTEND DEVELOPER</Specialization>
        <InfoBox>
            <MainTitle>Summary</MainTitle>
        <SummaryText>I am a Front-End developer looking for a full-time position in a company that's aimed at making both everyday life and business easier, more productive and user-friendly. I have sound knowledge of HTML, CSS, JavaScript, and React. I am a fast learner, responsible, and ready for challenging tasks.</SummaryText>
        <MainTitle>Project Experience</MainTitle>
        <ExperienceList>
            <MainItem><MainLink href="https://kseniia30.github.io/goit-markup-hw-08/" target="_blanc" rel="noreferrer">WebStudio</MainLink> (basis HTML5/CSS3)</MainItem>
            <MainItem><MainLink href="https://iie4ehbkadp.github.io/project_group4/" target="_blanc" rel="noreferrer">Ice Cream </MainLink>(experience oteam-working, HTML5/CSS3, work with GitHub/terminal/parsel)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/goit-js-hw-08/ "target="_blanc" rel="noreferrer">JS-homework </MainLink>(work witlibreries and terminal)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/starwars/" target="_blanc" rel="noreferrer">StarWars</MainLink>(basis HTMLCSS3 and JS)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/freebie/" target="_blanc" rel="noreferrer">Freebie</MainLink>(basis HTML5/CSS)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/ac-milan-react/" target="_blanc" rel="noreferrer">AC Milan</MainLink>(basis React)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/goit-react-hw-08-phonebook/" target="_blanc" rel="noreferrer">Phonebook</MainLink>(React, Private/Public RoutesAutorization)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/goit-react-hw-05-movies/" target="_blanc" rel="noreferrer">Movies search</MainLink>(React, Routes, work with API)</MainItem>
            <MainItem><MainLink href="https://kseniia30.github.io/ac-milan-react/" target="_blanc" rel="noreferrer">AC Milan</MainLink>(React, Routes)</MainItem>
        </ExperienceList>
        <MainTitle>Work experience</MainTitle>
        <MainList>
            <MainItem>
                <h3><Link href="https://cg.hr.court.gov.ua/sud2036/" target="_blanc" rel="noreferrer"><b>Chuguev court of Kharkiv region</b></Link></h3>
                <p>court clerk | feb 2015 - up to now</p>
                <Dates>{checkDates("2015-02-23")}</Dates>
                <ul>
                    <li>communication</li>
                    <li>adaptability</li>
                    <li>discipline</li>
                </ul>
            </MainItem>
            <MainItem>
                <h3><Link href="https://goit.global/ua/</li>" target="_blanc" rel="noreferrer"><b>GoIt (Ukraine)</b></Link></h3>
                <p>student | march 2022 - up to now</p>
                <Dates>{checkDates("2022-03-23")}</Dates>
                <ul>
                    <li>website programming: html5, css3, JavaScript, React </li>
                    <li>teamwork</li>
                    <li>learnability</li>
                </ul>
            </MainItem>
        </MainList>
        <MainTitle>Education</MainTitle>
        <MainList>
            <MainItem>
                <Link href="https://goit.global/ua/" target="_blanc" rel="noreferrer"><b>GoIt (Ukraine)</b></Link><br />
                <p>March 2022 – up to now</p>
                <p>Full Stack Development</p>
            </MainItem>
            <MainItem>
                <Link href="https://univd.edu.ua/" target="_blanc" rel="noreferrer"><b>Kharkiv national University of Internal Affairs (Kharkiv)</b></Link><br/>
                <p>September 2016 - June 2018 | Law (Legal Enforcement), Bachelor's degree in Law</p>
                <p>September 2019 - June 2021 | Law (Legal Enforcement), Master's degree in Law</p>
            </MainItem>
            <MainItem>
                <Link href="http://hdadk.kharkov.ua/" target="_blanc" rel="noreferrer"><b>Kharkiv state auto-road college (Kharkiv)</b></Link><br/>
                <p>September 2010 - June 2014 | Junior Specialist's degree in Jurisprudence</p>
            </MainItem>
        </MainList>
        </InfoBox>
    </MainBox>
}
export default MainPart