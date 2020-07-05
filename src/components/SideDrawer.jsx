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
          <a href='/aboutme'>Sobre mí</a>
        </li>
        <li>
          <a href='/skills'>Proyectos</a>
        </li>
        <li>
          <a href='/experience'>Experiencia</a>
        </li>
        <li>
          <a href='/contact'>Contáctame</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
