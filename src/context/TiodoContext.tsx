import React, { createContext, useContext, useState, ReactNode } from 'react';

type Todo = {
    id: number;
    todo: string;
    isDone: boolean;
};

type TodoContextType = {
    todos: Todo[];
    todoText: string;
    setTodoText: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    editTodo: (id: number, updatedTodo: string) => void;
    deleteTodo: (id: number) => void;
    toggleDone: (id: number) => void;
    currentTodo: Todo | null;
    setCurrentTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

type TodoProviderProps = {
    children: ReactNode;
};

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoText, setTodoText] = useState<string>("");
    const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoText) {
            const newTodo: Todo = {
                id: todos.length ? todos[todos.length - 1].id + 1 : 1,
                todo: todoText,
                isDone: false
            };
            setTodos([...todos, newTodo]);
            setTodoText("");
        }
    };

    const editTodo = (id: number, updatedTodo: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, todo: updatedTodo } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleDone = (id: number) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                todoText,
                setTodoText,
                handleAdd,
                editTodo,
                deleteTodo,
                toggleDone,
                currentTodo,
                setCurrentTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
};
