import { useState } from 'react';
import type { Todo } from '../types/todo';
import { useTodo } from '../hooks/useTodo';
import { LucideEdit, LucideSave, LucideTrash } from "lucide-react";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { updateTodo, deleteTodo, toggleComplete, loading } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className='flex justify-start gap-5 items-center mt-4'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} className='border' />
          <button onClick={handleUpdate} disabled={loading}>
            <LucideSave size={20} />
          </button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} disabled={loading}> <LucideEdit size={20} /></button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)} disabled={loading}><LucideTrash size={20}
      /></button>
    </div>
  );
};

export default TodoItem;
