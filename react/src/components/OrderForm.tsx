import { useState } from "react";

interface OrderFromProps{
    onSubmit(order: {name: string; cups: number}):void
}

export function OrderForm({onSubmit}:OrderFromProps){
    const [name,setName]=useState<string>('Masala')
    const [cups,setCups]=useState<number>(1)

    return <form onSubmit={handleSubmit}>
        <label> Chai Name</label>
        <input type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}/>
        <label>Cups</label>
        <input type="number" value={cups} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCups(Number(e.target.value))}/>
        <button>Order</button>
    </form>
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    onSubmit({ name, cups });
}
