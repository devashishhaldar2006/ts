import type {Chai} from "../types"
import { ChaiCard } from "./ChaiCard"


interface ChaiListProps{
    items:Chai[]
}

export function ChaiList({items}:ChaiListProps){
    return (
        <div>
            {items.map(())}
        </div>
    )
}

