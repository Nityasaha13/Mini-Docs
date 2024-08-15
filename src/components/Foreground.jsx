import React from 'react'
import Card from './Card'

export default function Foreground() {

  const data = [
    {
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit.",
      fileSize: "0.9mb",
      close: true,
      tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit 2.",
      fileSize: "0.9mb",
      close: false,
      tag:{isOpen: false, tagTitle: "Download Here", tagColor: "red"},
    },
    {
      desc: "LoremLorem ipsum, dolor sit amet consectetur adipisicing elit. 3",
      fileSize: "0.9mb",
      close: true,
      tag:{isOpen: true, tagTitle: "Download Here", tagColor: "blue"},
    },
  ];

  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
          <Card data ={item} />
        ))}
    </div>
  )
}
