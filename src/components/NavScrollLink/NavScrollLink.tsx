import React, { FC } from "react";
import { NavLink } from "reactstrap";

interface NavScrollLinkProps {
  scrollToId?: string;
}

const NavScrollLink: FC<NavScrollLinkProps> = ({ scrollToId, children }) => {
  const onLinkClick = () => {
    if (scrollToId) {
      const offsetTop = document.getElementById(scrollToId)?.offsetTop;
      offsetTop !== undefined && window.scrollTo(0, offsetTop - 60);
    }
  };

  return (
    <NavLink onClick={onLinkClick} href="#">
      {children}
    </NavLink>
  );
};

export default NavScrollLink;
