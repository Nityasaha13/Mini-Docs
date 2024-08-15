import React from 'react'
import Card from './Card'
import { useRef } from 'react';

export default function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit.",
      fileSize: "0.9mb",
      close: true,
      tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit 2.",
      fileSize: "1mb",
      close: false,
      tag:{isOpen: false, tagTitle: "Download Here", tagColor: "green"},
    },
    {
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. 3",
      fileSize: "2mb",
      close: true,
      tag:{isOpen: true, tagTitle: "Download Here", tagColor: "green"},
    },
  ];

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}
