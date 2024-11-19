import React, { useState } from 'react';
import { Todo } from '../model';
import { useTodoContext } from '../context/TiodoContext';

type Props = {
    todo: Todo;
};

const SingleTodo: React.FC<Props> = ({ todo }) => {
    const { toggleDone, deleteTodo, editTodo, setCurrentTodo, currentTodo } = useTodoContext();
    const [edit, setEdit] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todo.todo);
    const [viewMore, setViewMore] = useState<boolean>(false);

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        editTodo(todo.id, editText);
        setEdit(false);
    };

    const handleViewMore = () => {
        if (viewMore && currentTodo?.id === todo.id) {
            // Toggle off if the same todo is clicked
            setViewMore(false);
            setCurrentTodo(null);
        } else {
            // Set the selected todo and toggle viewMore on
            setCurrentTodo(todo);
            setViewMore(true);
        }
    };

    return (
        <>
            <form onSubmit={handleEditSubmit}>
                {edit ? (
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        autoFocus
                    />
                ) : (
                    <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                        {todo.todo}
                    </span>
                )}
                <div>
                    <button type="button" onClick={() => setEdit(!edit)}>
                        {edit ? 'Save' : 'Edit'}
                    </button>
                    <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <button type="button" onClick={() => toggleDone(todo.id)}>
                        {todo.isDone ? 'Undo' : 'Complete'}
                    </button>
                    <button type="button" onClick={handleViewMore}>
                        {viewMore ? 'Hide Details' : 'View More'}
                    </button>
                </div>
            </form>

            {viewMore && currentTodo?.id === todo.id && (
                <div>
                    <h4>Todo Details:</h4>
                    <p>{currentTodo.todo}</p>
                </div>
            )}
        </>
    );
};

export default SingleTodo;
