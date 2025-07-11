import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodo';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { createTodo, loading } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    createTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-6'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        disabled={loading}
        className='border'
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
