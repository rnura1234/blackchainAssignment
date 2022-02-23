import { MenuItem, MenuList, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import {
  ArticleOutlined,
  Grid4x4Rounded,
  ChaletRounded,
  VerticalAlignTop,
  NotAccessibleOutlined,
  ChairAltOutlined,
  MailOutline,
  CoffeeOutlined,
  BiotechOutlined,
  Home,
} from '@mui/icons-material';

import classes from './SideNavbar.module.css';
const Sidenavbar = () => {
  const SideBarData = [
    {
      title: 'Home',
      icon: <Home />,
    },
    {
      title: 'Section1',
      icon: <BiotechOutlined />,
    },
    {
      title: 'Section2',
      icon: <CoffeeOutlined />,
    },
    {
      title: 'Section3',
      icon: <MailOutline />,
    },
    {
      title: 'Section4',
      icon: <ChairAltOutlined />,
    },
    {
      title: 'Section5',
      icon: <NotAccessibleOutlined />,
    },
    {
      title: 'Section6',
      icon: <VerticalAlignTop />,
    },
    {
      title: 'Section7',
      icon: <ChaletRounded />,
    },
    {
      title: 'Section8',
      icon: <Grid4x4Rounded />,
    },
    {
      title: 'Documentation',
      icon: <ArticleOutlined />,
    },
  ];
  return (
    <>
      <div>
        <span>N</span>
        <span>Name</span>
        <span>icon</span>
      </div>
      <MenuList>
        {SideBarData.map((item) => {
          return (
            <MenuItem style={{color:'#808191'}} key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.title}</ListItemText>
            </MenuItem>
          );
        })}
      </MenuList>
    </>
  );
};

export default Sidenavbar;
