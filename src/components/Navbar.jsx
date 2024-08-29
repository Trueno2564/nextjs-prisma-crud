import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-700'>
            <div className='container mx-auto flex p-4 gap-10 items-center'>
                <h3 className='text-3xl font-bold'>Next CRUD</h3>
                <ul className='flex gap-4'>
                    <li><Link className='text-slate-300 hover:text-slate-400' href="/">Tasks</Link></li>
                    <li><Link className='text-slate-300 hover:text-slate-400' href="/new">New</Link></li>
                    <li><Link className='text-slate-300 hover:text-slate-400' href="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
