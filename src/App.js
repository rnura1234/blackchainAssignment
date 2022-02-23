import React, { Fragment } from 'react';
import { Container } from '@mui/material';
import Sidenavbar from './Components/SideNavbar';
import Maincontent from './Components/MainContent';
import Rightcontent from './Components/RightContent';

import classes from './App.module.css';

function App() {
  return (
    <Fragment>
      <header className={classes.header}>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </header>
      <main className={classes.main}>
        <section className={classes.main_section1}>
          <Sidenavbar />
        </section>
        <section className={classes.main_section2}>
          <Maincontent />
        </section>
        <section className={classes.main_section3}>
          <Rightcontent />
        </section>
      </main>
    </Fragment>
  );
}

export default App;
