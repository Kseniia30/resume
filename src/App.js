import { Route, Routes } from 'react-router-dom';
import { Layout, HomePage } from './pages';
import { Container } from './App.styled';
import { lazy } from 'react';

const Resume = lazy(() => import('./pages'));
const ResumeNew = lazy(() => import('./components/ResumeNew/ResumeNew'));

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="resume1" element={<Resume />} />
          <Route path="resume2" element={<ResumeNew />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
