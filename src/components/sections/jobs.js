import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Section, Heading } from '@styles';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { skills } from '../../../content/skills/skills.js';
import './skill.css';

const StyledContainer = styled(Section)`
  position: relative;
  max-width: 1000px;
`;

/*
const StyledImg = styled.img`
filter: blur(0px);
width: 60px;
margin: 1rem;
cursor: pointer;
`;

const StyledProjectName = styled.h5`
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  margin: 30px 0 10px 0;
  color: ${colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  ${media.thone`color: ${colors.white};`};
  a {
    ${media.tablet`display: block;`};
  }
`;

const StyledDivCard = styled.div`
  margin: 1rem;
  box-sizing: border-box; 
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #64FFDA;

`;

const StyledDivCardB = styled.div`
  margin-top: 1rem;npm
  margin-right: 4.7rem;
  box-sizing: border-box; 
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #64FFDA;

`;

const StyledDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

const StyledDivB = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainCard = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledContainCardB = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2.2rem;
`;


const StyledTextCard = styled.p`
  color: #64FFDA;
`; 
*/

const Jobs = () => {
  /* return (
    <StyledContainer id="technologies" >
      <Heading>Technologies</Heading>
      <StyledProjectName>Dominate</StyledProjectName>
      <StyledContainCard>
        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={html} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>HTML</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>

        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={css} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>CSS</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>

        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={sass} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>Sass</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>

        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={js} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>JS</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>
      </StyledContainCard>

      <StyledContainCard>
        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={jquery} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>Jquery</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>

        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={react} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>React</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>

        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={redux} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>Redux</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>


        <StyledDivCard>
          <StyledDivB>
            <StyledImg src={style} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>Syled</StyledTextCard>
          </StyledDiv>
        </StyledDivCard>
      </StyledContainCard>


      <StyledProjectName>In Progress</StyledProjectName>

      <StyledContainCardB>
        <StyledDivCardB>
          <StyledDivB>
            <StyledImg src={node} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>NodeJs</StyledTextCard>
          </StyledDiv>
        </StyledDivCardB>

        <StyledDivCardB>
          <StyledDivB>
            <StyledImg src={mysql} alt="Avatar" />
          </StyledDivB>
          <StyledDiv>
            <StyledTextCard>MySql</StyledTextCard>
          </StyledDiv>
        </StyledDivCardB>
      </StyledContainCardB>
    </StyledContainer>
  ); */
  const skillsName = Object.keys(skills);
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0]);
  const selectedSkills = skills[selectedSkill];

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <div id="skill" className="skill-area">
      <StyledContainer id="technologies" ref={revealContainer}>
        <Heading>Technologies</Heading>
        <div className="skills">
          <ul className="skill-nav">
            {skillsName.map(name => (
              <li
                onClick={() => setSelectedSkill(name)}
                className={name === selectedSkill ? 'active' : ''}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="skill">
            {selectedSkills.map(({ name, percent }) => (
              <div key={name} className="card">
                <h4>{name}</h4>
                <p>{percent}%</p>
                <div style={{ width: percent + "%" }} className="progress-ar" />
              </div>
            ))}
          </div>
        </div>
      </StyledContainer>
    </div>
  );
};


export default Jobs;
