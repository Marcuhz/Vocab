import React from 'react'

function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log(event)
}

export const Word = () => {
  return (
      <form onSubmit={handleSubmit}>
          <input type="text" name="input" id="input" />
    </form>
  )
}
