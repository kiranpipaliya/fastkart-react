import { Iconly } from 'react-iconly';

const NotificationBox = () => {
  return (
    <div className='offer-box'>
      <div className='media'>
        <div className='icon-wrap bg-theme-blue'>
          <Iconly name='Discount' set='bulk' primaryColor='blueviolet' size='xlarge'></Iconly>
        </div>
        <div className='media-body'>
          <h3 className='font-sm title-color'>UPTO 40% OFF, Sales Ends</h3>
          <span className='font-xs content-color'>3.00pm, 10 July, 2021</span>
        </div>
        <span className='badges bg-theme-theme-light font-theme'>offer</span>
      </div>
    </div>
  );
};
export default NotificationBox;
