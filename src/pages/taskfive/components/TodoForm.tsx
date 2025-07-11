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
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tambah Task Baru"
        disabled={loading}
        className='border text-center rounded min-w-80'
      />
      <button className='bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded' type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
};

export default TodoForm;
