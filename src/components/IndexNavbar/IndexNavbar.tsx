import React, { FC, useEffect, useState } from 'react';
import classnames from 'classnames';
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';
import './IndexNavbar.sass';
import NavScrollLink from '../NavScrollLink/NavScrollLink';

const IndexNavbar: FC = () => {
  const [navbarColor, setNavbarColor] = useState('navbar-transparent');
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNavbarColor('');
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
      <Container className="nav-container">
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/"
            title="JoannaMarkiewicz.pl"
          >
            JoannaMarkiewicz.pl
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.youtube.com/user/joannamarkiewicz"
                target="_blank"
                title="Mój Youtube"
              >
                <i className="fa fa-youtube-square" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/joanna.markiewicz.3"
                target="_blank"
                title="Mój Facebook"
              >
                <i className="fa fa-facebook-square" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavScrollLink scrollToId="cv">Życiorys</NavScrollLink>
            </NavItem>
            <NavItem>
              <NavScrollLink scrollToId="news">Aktualności</NavScrollLink>
            </NavItem>
            <NavItem>
              <NavScrollLink scrollToId="gallery">Galeria</NavScrollLink>
            </NavItem>
            <NavItem>
              <NavScrollLink scrollToId="video">Video</NavScrollLink>
            </NavItem>
            <NavItem>
              <NavScrollLink scrollToId="contact">Kontakt</NavScrollLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default IndexNavbar;
