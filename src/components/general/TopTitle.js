import React from 'react';
import { Link } from 'react-router-dom';
const TopTitle = (props) => {
  return (
    <>
      <div className='top-content'>
        <div>
          <h4 className='title-color'>{props.title}</h4>
          {props.subTitle && <p className='content-color'>{props.subTitle}</p>}
        </div>
        {props.link && (
          <Link to={props.path} className='font-theme'>
            {props.link}
          </Link>
        )}
      </div>
    </>
  );
};
export default TopTitle;
