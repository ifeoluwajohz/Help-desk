import React from 'react';
import { useTodoContext } from '../context/TiodoContext';

const InputField: React.FC = () => {
    const { todoText, setTodoText, handleAdd } = useTodoContext();

    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Input a task..."
            />
            <button type="submit">Go</button>
        </form>
    );
};

export default InputField;
