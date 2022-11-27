import { StyledTable, StyledLink,  StyledTh, StyledTd, StyledFirst, TableList, ExpirienceTime, EducationLink } from "./Resume.styled"
import { formatDistance } from 'date-fns'

export const checkDates = date => {
        return formatDistance(
                new Date(date), new Date(Date.now())
            )
}
    
const ResumeTable = () => {

    return <StyledTable>
            <thead>
                <tr>
                    <StyledTh>Category</StyledTh>
                    <StyledTh>Information</StyledTh>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <StyledFirst>Profile</StyledFirst>
                    <StyledTd>I am a punctual and motivated individual who is able to work in a busy environment and produce high standards of work. I am an excellent team worker and am able to take instructions from all levels and build up good working relationships with all colleagues. I am flexible, reliable and possess excellent time keeping skills.</StyledTd>
                </tr>
                <tr>
                    <StyledFirst>Experience</StyledFirst>
                    <StyledTd>
                        <TableList>
                            <li>
                                <b>Сourt clerk (Chuguev court of Kharkiv region)</b>
                                <p>February 2015 - up to now | Chuguev, Kharkiv region, Ukraine</p>
                                <ExpirienceTime>{checkDates("2015-02-23")}</ExpirienceTime>
                            </li>
                            <li>
                                <b>Student (GOIT-IT-courses)</b>
                                <p>March 2022 – up to now | Ukraine</p>
                                <ExpirienceTime>{checkDates("2022-03-23")}</ExpirienceTime>
                            </li>
                        </TableList>
                        <b>Projects:</b>
                        <TableList>
                            <li><StyledLink href="https://kseniia30.github.io/goit-markup-hw-08/" target="_blanc" rel="noreferrer">WebStudio</StyledLink> (basis HTML5/CSS3)</li>
                            <li><StyledLink href="https://iie4ehbkadp.github.io/project_group4/" target="_blanc" rel="noreferrer">Ice Cream </StyledLink>(experience of team-working, HTML5/CSS3, work with GitHub/terminal/parsel)</li>
                            <li><StyledLink href="https://kseniia30.github.io/goit-js-hw-08/" target="_blanc" rel="noreferrer">JS-homework </StyledLink>(work with libreries and terminal)</li>
                            <li><StyledLink href="https://kseniia30.github.io/starwars/" target="_blanc" rel="noreferrer">StarWars</StyledLink>(basis HTML5/CSS3 and JS)</li>
                            <li><StyledLink href="https://kseniia30.github.io/freebie/" target="_blanc" rel="noreferrer">Freebie</StyledLink>(basis HTML5/CSS3)</li>
                            <li><StyledLink href="https://kseniia30.github.io/ac-milan-react/" target="_blanc" rel="noreferrer">AC Milan</StyledLink>(basis React)</li>
                            <li><StyledLink href="https://kseniia30.github.io/goit-react-hw-08-phonebook/" target="_blanc" rel="noreferrer">Phonebook</StyledLink>(React, Private/Public Routes, Autorization)</li>
                            <li><StyledLink href="https://kseniia30.github.io/goit-react-hw-05-movies/" target="_blanc" rel="noreferrer">Movies search</StyledLink>(React, Routes, work with API)</li>
                        </TableList>
                    </StyledTd>
                </tr>
                <tr>
                    <StyledFirst>Skills</StyledFirst>
                    <StyledTd>
                        <b>Soft skills</b>
                        <TableList>
                            <li>adaptive</li>
                            <li>teamwork</li>
                            <li>organizing</li>
                        </TableList>
                        <b>Tech skills</b>
                        <TableList>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Software</li>
                        </TableList>
                    </StyledTd>
                </tr>
                <tr>
                    <StyledFirst>Education</StyledFirst>
                    <StyledTd>
                        <TableList>
                            <li>
                                <EducationLink href="http://hdadk.kharkov.ua/" target="_blanc" rel="noreferrer"><b>Kharkiv state auto-road college</b></EducationLink><br/>
                                <b>Jurisprudence</b>
                                <p>September 2010 - June 2014 | Kharkiv,Ukraine</p>
                            </li>
                            <li>
                                <EducationLink href="https://univd.edu.ua/" target="_blanc" rel="noreferrer"><b>Kharkiv national University of Internal Affairs</b></EducationLink><br/>
                                <b>Law (Legal Enforcement)</b>
                                <p>September 2016 - June 2018 | Kharkiv,Ukraine</p>
                                <p>September 2019 - June 2021 | Kharkiv,Ukraine</p>
                            </li>
                            <li>
                                <EducationLink href="https://goit.global/ua/</li>" target="_blanc" rel="noreferrer"><b>GoIt</b></EducationLink><br/>
                                <b>Full Stack Development</b>
                                <p>March 2022 – up to now | Ukraine</p>
                            </li>
                        </TableList>
                    </StyledTd>
                </tr>
            </tbody>
        </StyledTable>
}

export default ResumeTable