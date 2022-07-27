import React from "react";
const Main = (props) => {
    const classes = `main-wrap mb-xxl ${props.className}`
    console.log(props);
    return <main className={classes}>{props.children}</main>
}
export default Main;    