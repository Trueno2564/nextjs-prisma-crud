"use client"
import { useRouter } from "next/navigation"

function taskCard({ task }) {

    const router = useRouter()
    return (
        <div className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer' onClick={() => {router.push("/task/edit/" + task.id)}}>
            <h3 className='font-bold text-2xl mb-2'>{task.tittle}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.crateAt).toLocaleDateString()}</p>
        </div>
    )
}

export default taskCard
