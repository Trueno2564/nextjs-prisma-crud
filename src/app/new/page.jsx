"use client"
import { useRouter } from 'next/navigation'

function NewPage() {
    const router = useRouter();

    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log(e)
        const title = e.target.title.value
        const description = e.target.description.value
        
        console.log(title, description)

        const res = await fetch('/api/task', {
            method: "POST",
            body: JSON.stringify({tittle:title, description:description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await res.json()
        console.log(res);
        router.push("/")
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <form className='bg-slate-800 p-10 lg:w-1/4 md:w-1/2' onSubmit={onSubmit}>
                <label htmlFor="title" className='font-bold text-sm'>Titulo</label>
                <input type='text' className='border border-gray-400 p-2 mb-4 w-full text-black' placeholder='Titulo' id='title'/>
                <label htmlFor="description" className='font-bold text-sm'>Descripcion</label>
                <textarea rows="3" className='border border-gray-400 p-2 mb-4 w-full text-black' placeholder='Describe tu tarea' id='description'></textarea>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Crear</button>
            </form>
        </div>
    )
}

export default NewPage
