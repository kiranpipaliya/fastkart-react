import React, { useState, useEffect } from 'react';

const useShowClass = (anmClass) => {
  const [show, setShow] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(anmClass);
    }, 200);

    return () => clearTimeout(timeout);
  }, [show, anmClass]);

  return [show, setShow];
};
export default useShowClass;
