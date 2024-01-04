import React, { Component } from 'react'

interface cardProps {
    icon: any;
    text: string;
}

export default function CardSkills({icon, text} :cardProps) {
  return (
    <div className='flex items-center flex-col'>
        <div className='text-[10rem] text-indigo-900'>
            {icon}
        </div>
        <p className='font-mono'>{text}</p>

    </div>
  )
}
