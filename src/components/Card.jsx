import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

export default function Card({data}) {
  return (
    <div className='relative flex-shrink-0 text-white px-7 py-10 w-60 h-72 rounded-[30px] bg-zinc-900/90 overflow-hidden'>

      <FaFileAlt />

      <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className='flex items-center justify-between py-3 px-5 mb-3'>
            <h5>{data.fileSize}</h5>
            <span className='h-7 w-7 bg-zinc-600 rounded-full flex items-center justify-center'>   
              {data.close ? <IoCloseSharp color='#fff' size='0.8em'/> : <FaDownload color='#fff' size='0.8em'/>}                    
            </span>
        </div>
        {
          data.tag.isOpen && (  
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
          )
        }
      </div>
    </div>
  )
}
