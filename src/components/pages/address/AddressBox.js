import React, { useContext } from 'react';
import { Home, Briefcase, Map } from 'react-feather';
import AddressContext from '../../../context/addressContext/addressContext';
const AddressBox = (props) => {
  const addressCtx = useContext(AddressContext);

  const activeHandler = (id) => {
    addressCtx.setAddress(id);
  };

  return (
    <div onClick={() => activeHandler(props.data.id)} className={`address-box ${props.data.active ? 'active' : ''}`}>
      <div className='conten-box'>
        <div className='heading'>
          {props.data.addressType === 'home' && <Home />}
          {props.data.addressType === 'work' && <Briefcase />}
          {props.data.addressType === 'other' && <Map />}
          <h2 className='title-color font-md'>{props.data.addressType}</h2>
          {props.data.addressDefault && <span className='badges-round font-white bg-theme-theme font-xs'>Default</span>}
        </div>
        <h3 className='title-color font-sm'>{props.data.name}</h3>
        <p className='content-color font-sm'>{props.data.address}</p>
      </div>
      <img src={props.data.image} alt={props.data.alt} />
    </div>
  );
};
export default AddressBox;
