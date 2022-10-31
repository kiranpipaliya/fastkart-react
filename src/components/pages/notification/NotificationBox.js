const NotificationBox = (props) => {
  return (
    <div className='offer-box'>
      <div className='media'>
        <div className={`icon-wrap bg-theme-${props.data.color}`}>
          <svg>
            <use href={`assets/icons/svg/iconly/sprite.svg#${props.data.icon}`}></use>
          </svg>
        </div>
        <div className='media-body'>
          <h3 className='font-sm title-color'>{props.data.title}</h3>
          <span className='font-xs content-color'>{props.data.subTitle}</span>
        </div>
        <span className='badges bg-theme-theme-light font-theme'>{props.data.label}</span>
      </div>
    </div>
  );
};
export default NotificationBox;
