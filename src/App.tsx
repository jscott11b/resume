import Summary from './components/Summary';
import Employment from './components/Employment';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';
import Main from './components/Main';
import Menu from './components/Menu';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Name from './components/Name';
import resume from './resume';
import { themes } from './themes';
import exportResumeAsPdf from './exportResumeAsPdf';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const Footnote = styled.div`
  text-align: center;
  font-size: 0.5em;
  grid-area: footer;
`;

const Link = styled.a`
  color: ${props => props.theme.mainColor};
`;

const Header = styled.div`
  grid-area: header;
  position: ${(props)=>props.theme.isWebLayout ? "sticky" : "static"};
  top: 0;
`;

function App() {
  const [theme, setTheme] = useState<DefaultTheme>({...themes[0]});

  const menuOptions = {
    theme: {
      get: theme,
      set: (theme: DefaultTheme) => setTheme(theme)
    },
    export: () => exportResumeAsPdf()
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container>
        <Main>
          <Header>
            <Menu menuOptions={menuOptions} />
            <Name />
          </Header>
          <Summary />
          <Contact />
          <Employment employments={resume.employments} />
          <Education education={resume.education}/>
          <TechnicalSkills technicalSkills={resume.technicalSkills} />
          <Footnote>source: <Link href={resume.source}>{resume.source}</Link></Footnote>
        </Main>
      </Container>
    </ThemeProvider>
    </>
  );
}

export default App;