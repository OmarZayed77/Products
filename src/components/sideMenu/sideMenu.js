import React from 'react';
import {Menu} from 'element-react/next';
import {withRouter} from 'react-router-dom';
import * as cssClasses from './sideMenu.module.css';

const SideMenu = (props) => {
  // map companies from database to side menu filters
  let items = null;
  if(props.companies) items = props.companies.map(c => <Menu.Item key={c.id} index={c.name}>{c.name}</Menu.Item>);
  return (
    <Menu onSelect={props.onSelect} defaultActive={props.filter} className={`${cssClasses.sideMenu} el-menu-vertical-demo`}theme="dark">
      <Menu.Item index="All">All</Menu.Item>
      {items}
    </Menu>
  );
}

export default withRouter(SideMenu);