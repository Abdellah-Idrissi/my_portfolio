'use client'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function StopScroll() {
  const startScroll = useSelector(state=> state.scroll)

  useEffect(() => {

    if (startScroll) {
      document.querySelector('body').style.overflowY = 'auto'
      document.querySelector('body').style.height = 'auto'
    } 
  }, [startScroll])


  return <></>
}
