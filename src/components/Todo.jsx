import React from 'react'

const todo = ({todos,changeStatusT,changeStatusD}) => {
  return (
    <>
      <div className="all-todos">
          <h5>Todo</h5>
          {todos.todo.length === 0 && <p>Try adding something</p>}
          {todos?.todo?.map((todo) => (
            <div className="todo" key={todo.id}>
              <input type="checkbox" name="checkbox" id="checkbox" onClick={() => changeStatusT(todo)}/>
              <h4>{todo.text}</h4>
            </div>
          ))}
        </div>
        <div className="all-todos done">
          <h5>Completed</h5>
          {todos.done.length === 0 && <p>Try completing something</p>}
          {todos?.done?.map((done) => (
            <div className="todo" key={done.id}>
              <input type="checkbox" name="checkbox" id="checkbox" onClick={() => changeStatusD(done)} checked/>
              <h4>{done.text}</h4>
            </div>
          ))}
        </div>
    </>
  )
}

export default todo