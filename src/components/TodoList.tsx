import React from 'react';
import SingleTodo from './SingleTodo';
import { useTodoContext } from '../context/TiodoContext';

const TodoList: React.FC = () => {
    const { todos } = useTodoContext();

    return (
        <div>
            {todos.map(todo => (
                <SingleTodo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
