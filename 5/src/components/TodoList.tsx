import { useTodo } from '../hooks/useTodo';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, loading } = useTodo();

  if (!todos.length) return <p className='mt-10'>No todos yet!</p>;

  return (
    <div>
      {loading && <p className='mt-10'>Loading...</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
