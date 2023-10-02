"use client"

import { useState } from 'react'
import React from 'react'
import SearchName from './SearchName'

const SearchBar = () => {
    const [name, setName] = useState('')

    const handleSearch = () => { }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchName
                    name={name}
                    setName={setName} />
            </div>
        </form>
    )
}

export default SearchBar