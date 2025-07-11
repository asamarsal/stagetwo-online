import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoProvider>
      <div className='flex flex-col items-center h-screen justify-center'>
        <h1 className='mb-6 font-xl'>ToDo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
