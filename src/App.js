import { Route, Routes } from 'react-router-dom';
import { Layout, HomePage, Resume } from './pages';
import { Container } from './App.styled';
import ResumeNew from './components/ResumeNew/ResumeNew';

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
