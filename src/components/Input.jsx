import React from 'react'

const Input = ({text,onChange,handleKeyPress,addTodo}) => {
  return (
    <div className="input">
        <input 
          type="text" 
          className='input-box-for-todo' 
          value={text} 
          name="todo" 
          id="todo" 
          placeholder='Enter Todo' 
          onChange={onChange}
          onKeyPress={handleKeyPress}
          />
        <button type='submit' className='button' onClick={addTodo}>Add</button>
      </div>
  )
}

export default Input