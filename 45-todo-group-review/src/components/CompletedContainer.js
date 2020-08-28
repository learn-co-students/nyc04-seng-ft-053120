import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {

    const renderTodos = () => {
        return props.todos.map(todo => {
            return <ToDoCard key={todo.id} todoObj={todo} />
        })
    }

    return (
        <div>
            <h1>Completed Todos</h1>
            {renderTodos()}
        </div>
    )
}

export default CompletedContainer