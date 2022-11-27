import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { LayoutList, LayoutItem, LayoutNavLink } from './Pages.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <LayoutList>
          <LayoutItem>
            <LayoutNavLink to="/">Greeting</LayoutNavLink>
          </LayoutItem>
          <LayoutItem>
            <LayoutNavLink to="/resume1">Resume</LayoutNavLink>
          </LayoutItem>
          <LayoutItem>
            <LayoutNavLink to="/resume2">Another resume</LayoutNavLink>
          </LayoutItem>
        </LayoutList>
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;
