import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-around items-center max-x-6xl mx-auto p-3'>
            <Link to='/'> 
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-500'>Fund</span>
                    <span className='text-slate-700'>Flick</span>
                </h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='text-slate-700 hover:underline' >Home</li>
                </Link>
                <Link to='/about'>
                    <li className='text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='text-slate-700 hover:underline'>Sign In</li>
                </Link>
            </ul>
        </div>
        
    </header>
  )
}
