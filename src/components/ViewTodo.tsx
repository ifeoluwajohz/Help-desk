import React from 'react';
import { useTodoContext } from '../context/TiodoContext';

const ViewTodo: React.FC = () => {
    const { currentTodo } = useTodoContext();

    if (!currentTodo) return null;

    return (
        <div>
            <h4>Todo Details:</h4>
            <p>{currentTodo.todo}</p>
        </div>
    );
};

export default ViewTodo;
