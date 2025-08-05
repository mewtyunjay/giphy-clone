import { useState, useEffect } from "react"

export const Search = ({onSearch, searchItem}: {onSearch: (searchItem: string) => void, searchItem: string}) => {

    return (
        <div>
            <input type="text" placeholder="Search" value = {searchItem} onChange = {(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}/>
        </div>
    )
}
