import { formatDistance } from 'date-fns';
import {
  MainBox,
  InfoBox,
  Name,
  Specialization,
  SummaryText,
  MainTitle,
  MainList,
  MainItem,
  MainLink,
  ExperienceList,
  Link,
  Dates,
  EducationText,
} from './MainPart.styled.js';

const checkDates = date => {
  return formatDistance(new Date(date), new Date(Date.now()));
};

const MainPart = () => {
  return (
    <MainBox>
      <Name>KSENIIA SHYKOVA</Name>
      <Specialization>JUNIOUR FRONTEND DEVELOPER</Specialization>
      <InfoBox>
        <MainTitle>Summary</MainTitle>
        <SummaryText>
          I am a Junior Front End Developer and JavaScript, master HTML5, CSS3.
          In addition to this, I have experience with implementing both
          individual and team projects. I am adaptive, organized, punctual and I
          have a high level of learnability and growth mindset. The vacancy in
          IT-company is interesting for me as I want to participate in creating
          web-sites. It is important for me to grow as a Front Developer and to
          put in practice my knowledge in HTML, CSS and JS.
        </SummaryText>
        <MainTitle>Project Experience</MainTitle>
        <ExperienceList>
          <MainItem>
            <MainLink
              href="https://kseniia30.github.io/goit-markup-hw-08/"
              target="_blanc"
              rel="noreferrer"
            >
              WebStudio,
            </MainLink>
            <MainLink
              href="https://github.com/Kseniia30/goit-markup-hw-08"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (basis HTML5/CSS3)
            <p>
              A website with a responsive layout. Role: Developer. <br /> Build
              project on github, check for build errors and live page
              performance.
            </p>
          </MainItem>
          <MainItem>
            <MainLink
              href="https://iie4ehbkadp.github.io/project_group4/"
              target="_blanc"
              rel="noreferrer"
            >
              Ice Cream,
            </MainLink>
            <MainLink
              href="https://github.com/IIe4eHbkADp/project_group4"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (experience of team-working, HTML5/CSS3, work with
            GitHub/terminal/parsel)
            <p>
              A website with a responsive layout. Role: Developer. <br /> Build
              team project on github, check for build errors and live page
              performance.
            </p>
          </MainItem>
          <MainItem>
            <MainLink
              href="https://kseniia30.github.io/ac-milan-react/"
              target="_blanc"
              rel="noreferrer"
            >
              AC Milan,
            </MainLink>
            <MainLink
              href="https://github.com/Kseniia30/ac-milan-react"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (basis React, Browser-Router)
            <p>
              A website with React. Role: Developer. <br /> Build project on
              github, check for build errors and live page performance.
            </p>
          </MainItem>
          <MainItem>
            <MainLink
              href="https://kseniia30.github.io/goit-react-hw-08-phonebook/"
              target="_blanc"
              rel="noreferrer"
            >
              Phonebook,
            </MainLink>
            <MainLink
              href="https://github.com/Kseniia30/goit-react-hw-08-phonebook"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (React, Private/Public Routes, Autorization)
            <p>
              A website for contact storage. Role: Developer. <br /> Build
              project on github, check for build errors and live page
              performance.
            </p>
          </MainItem>
          <MainItem>
            <MainLink
              href="https://kseniia30.github.io/goit-react-hw-05-movies/"
              target="_blanc"
              rel="noreferrer"
            >
              Movies search,
            </MainLink>
            <MainLink
              href="https://github.com/Kseniia30/goit-react-hw-05-movies"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (React, Browser-Router, REST API)
            <p>
              Application for choosing a movie. Role: Developer. <br /> Build
              project on github, check for build errors and live page
              performance. App component with Public and Private routes,
              AuthPage page logic.
            </p>
          </MainItem>
          <MainItem>
            <MainLink
              href="https://kseniia30.github.io/ice-cream_react/"
              target="_blanc"
              rel="noreferrer"
            >
              Ice Cream - react,
            </MainLink>
            <MainLink
              href="https://github.com/Kseniia30/ice-cream_react"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (React, Routes, REST API, module.css)
            <p>
              Application for choosing ang buying an ice
              cream/coffee/milkshakes. Role: Developer. <br /> Build project on
              github, check for build errors and live page performance. App
              component with routes.
            </p>
          </MainItem>
          <MainItem>
            <MainLink
              href="https://dimon23114.github.io/Filmoteka_Drink_team/"
              target="_blanc"
              rel="noreferrer"
            >
              Filmoteka,
            </MainLink>
            <MainLink
              href="https://github.com/Dimon23114/Filmoteka_Drink_team"
              target="_blanc"
              rel="noreferrer"
            >
              Link
            </MainLink>
            (JavaScript, REST API, SASS, Firebase)
            <p>
              Application for choosing a movie. Role: Developer. <br /> Build
              project on github, check for build errors and live page
              performance. App component with AuthPage page logic.
            </p>
          </MainItem>
        </ExperienceList>
        <MainTitle>Work experience</MainTitle>
        <MainList>
          <MainItem>
            <h3>
              <Link
                href="https://cg.hr.court.gov.ua/sud2036/"
                target="_blanc"
                rel="noreferrer"
              >
                <b>Chuguev court of Kharkiv region</b>
              </Link>
            </h3>
            <p>court clerk | feb 2015 - up to now</p>
            <Dates>{checkDates('2015-02-23')}</Dates>
            <ul>
              <li>communication</li>
              <li>adaptability</li>
              <li>discipline</li>
            </ul>
          </MainItem>
          <MainItem>
            <h3>
              <Link
                href="https://goit.global/ua/"
                target="_blanc"
                rel="noreferrer"
              >
                <b>GoIt (Ukraine)</b>
              </Link>
            </h3>
            <p>student | march 2022 - up to now</p>
            <Dates>{checkDates('2022-03-23')}</Dates>
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
            <Link
              href="https://goit.global/ua/"
              target="_blanc"
              rel="noreferrer"
            >
              <b>GoIt (Ukraine)</b>
            </Link>
            <br />
            <EducationText>March 2022 – up to now</EducationText>
            <EducationText>Full Stack Development</EducationText>
          </MainItem>
          <MainItem>
            <Link href="https://univd.edu.ua/" target="_blanc" rel="noreferrer">
              <b>Kharkiv national University of Internal Affairs (Kharkiv)</b>
            </Link>
            <br />
            <EducationText>
              September 2016 - June 2018 | Law (Legal Enforcement), Bachelor's
              degree in Law
            </EducationText>
            <EducationText>
              September 2019 - June 2021 | Law (Legal Enforcement), Master's
              degree in Law
            </EducationText>
          </MainItem>
          <MainItem>
            <Link
              href="http://hdadk.kharkov.ua/"
              target="_blanc"
              rel="noreferrer"
            >
              <b>Kharkiv state auto-road college (Kharkiv)</b>
            </Link>
            <br />
            <EducationText>
              September 2010 - June 2014 | Junior Specialist's degree in
              Jurisprudence
            </EducationText>
          </MainItem>
        </MainList>
      </InfoBox>
    </MainBox>
  );
};
export default MainPart;
