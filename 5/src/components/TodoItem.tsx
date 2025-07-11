import { useState } from 'react';
import { Todo } from '../types/todo';
import { useTodo } from '../hooks/useTodo';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { updateTodo, deleteTodo, toggleComplete, loading } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className='flex justify-center gap-5 items-center mt-10'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} className='border' />
          <button onClick={handleUpdate} disabled={loading}>
            Save
          </button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)} disabled={loading}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)} disabled={loading}>Delete</button>
    </div>
  );
};

export default TodoItem;
