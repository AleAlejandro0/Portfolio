import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import './settings.css'


export default function locoScroll(start){
    useEffect(() => {
      if(!start) return;

      const scrollEl = document.querySelector('#main_container')
      const locoScroll = new LocomotiveScroll({
         el: scrollEl,
         smooth: true,
         multiplier: 1, 
         class: "is-reveal"
      })
    }, [start])
}

