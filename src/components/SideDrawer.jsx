import React from 'react';
import '../assets/styles/components/SideDrawer.scss';

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer-open';
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href='/'>Skills</a>
        </li>
        <li>
          <a href='/'>Proyectos</a>
        </li>
        <li>
          <a href='/'>Experiencia</a>
        </li>
        <li>
          <a href='/'>Contáctame</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
