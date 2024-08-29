'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

function NewPage({ params }) {
    const router = useRouter();
    const [tittle, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if(params.id){
            fetch(`/api/task/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.tittle)
                setDescription(data.description)
            })
        }
    },[])

    const onSubmit = async (e) =>{
        e.preventDefault();
        if (params.id){
            const result = await fetch(`/api/task/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ tittle, description }),
                headers: { 'Content-Type': 'application/json' },
            })
        }else{
            const result = await fetch('/api/task', {
                method: "POST",
                body: JSON.stringify({ tittle:tittle, description:description }),
                headers: { 'Content-Type': 'application/json' },
            })
        }        
        router.push("/")
        router.refresh()
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-slate-800 p-10 lg:w-1/4 md:w-1/2' onSubmit={onSubmit}>
                <label htmlFor="title" className='font-bold text-sm'>Titulo</label>
                <input type='text' className='border border-gray-400 p-2 mb-4 w-full text-black' placeholder='Titulo' id='title' 
                onChange={(e) => setTitle(e.target.value)}
                value={tittle}/>
                <label htmlFor="description" className='font-bold text-sm'>Descripcion</label>
                <textarea rows="3" className='border border-gray-400 p-2 mb-4 w-full text-black' placeholder='Describe tu tarea' id='description' 
                onChange={(e) => setDescription(e.target.value)}
                value={description}></textarea>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Crear</button>
                {params.id && (
                    <button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4' type='button'
                    onClick={async() => {
                        await fetch(`/api/task/${params.id}`, {
                            method: "DELETE"
                        })
                        router.push("/")
                        router.refresh()
                    }}>
                        Eliminar
                    </button>
                )}
            </form>
        </div>
    )
}

export default NewPage
