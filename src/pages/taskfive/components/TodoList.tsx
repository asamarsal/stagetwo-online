import { useTodo } from '../hooks/useTodo';
import TodoItem from './TodoItem';

import loadingLottie from "../assets/animations/loadinggif.json";

import Lottie from "lottie-react";


const TodoList = () => {
  const { todos, loading } = useTodo();

  if (!todos.length) return <p className='mt-4 flex justify-start'>Belum ada task.</p>;

  return (
    <div>
      {loading && <p className='mt-4'>
        <Lottie animationData={loadingLottie} loop={true} style={{ width: 100, height: 100 }} />
      </p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
