import styled from 'styled-components';

const MainBox = styled.div`
  padding: 10px;
`;

const InfoBox = styled.div`
  background-color: white;
  padding: 20px 40px;
  margin-top: 20px;
`;
const Name = styled.h1`
  font-family: 'Rubik 80s Fade';
  margin-bottom: 20px;
  text-align: center;
`;

const Specialization = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

const SummaryText = styled.p`
  text-align: justify;
`;

const MainTitle = styled.h2`
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const MainList = styled.ul`
  list-style: none;
`;

const MainItem = styled.li`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const MainLink = styled.a`
  color: inherit;
  margin-left: 5px;
  margin-right: 5px;

  :focus,
  :hover {
    color: red;
  }
`;

const ExperienceList = styled.ul`
  list-style: none;
`;

const Link = styled.a`
  color: inherit;
`;

const Dates = styled.p`
  font-size: 14px;
  opacity: 0.6;
`;

const EducationText = styled.p`
  font-size: 13px;
`;

export {
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
};
