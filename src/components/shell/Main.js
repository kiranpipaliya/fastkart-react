import React from 'react';
const Main = (props) => {
  const classes = `main-wrap mb-xxl ${props.className}`;
  return <main className={classes}>{props.children}</main>;
};
export default Main;
