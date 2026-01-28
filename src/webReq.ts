import axios from "axios"
import type { AxiosResponse } from "axios"

interface Todo{
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchData=async()=>{
    try {
        const res:AxiosResponse<Todo>=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(res.data)
    } catch (error:any) {
        if(axios.isAxiosError(error)){
            console.log(error.message)
            if(error.response){
                console.log(error.response.status)
            }
        }

    }
}


// axios.get("https://jsonplaceholder.typicode.com/todos/1")
// .then(res=>{
//     console.log(res.data)
// })