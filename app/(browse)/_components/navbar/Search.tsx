"use client"
import React from 'react'
import qs from "query-string"
import { useState } from 'react'
import {  SearchIcon, X } from "lucide-react"
import { useRouter } from 'next/navigation'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Search = () => {
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value) return;

        const url = qs.stringifyUrl({
            url: '/',
            query: { term: value},
        }, { skipEmptyString: true});
        
      // localhost:3000
        

       router.push(url)

    }

    const onClear = () => {
        setValue(""
        )
    };

  return (
    <form 
    onSubmit={onSubmit}
    className='realtive w-full lg:w-[400px] flex items-center '>
        <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
         placeholder='Search'
         className='rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 '
        />
        {value && (
            <X
             className='text-muted-foreground w-5 h-5 right-[66px] top-7
             cursor-pointer hover:opacity-75 transition absolute'
             onClick={onClear}
             />
        )}
        <Button
        type='submit'
        variant='secondary'
        size='sm'
        className='rounded-l-none'
        >
            <SearchIcon 
              className='h-5 w-5 text-muted-foreground '/>

        </Button>
    </form>
  )
}

export default Search


