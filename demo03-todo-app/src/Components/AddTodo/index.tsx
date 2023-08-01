import React, {useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../Context/useTodo'
import { Input } from '../Input'

export const AddTodo : React.FC = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo()

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if(input.trim() !== '' ) {
      addTodo(input)
      setInput('')
      toast.success('Todo added successfully!')
    }
    else {
      toast.error('Todo field cannot be empty')
    }
  }

  return( 
    <form onSubmit={handleSubmission}>
      <div className="flex item-center w-fll max-w-lg gap-2 p-5 m-auto" />
      <Input
        ref={inputRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        type="text"
        className="w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white"
        placeholder="start typing"
      />
      <button
        type='submit'
        className='px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-blue-900 active:scale-95 rounded-x1'
      >
        Submit
      </button>
    </form>
  )
}