import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { CartProvider } from './context/CartProvider';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function Taskfive() {
    return (
    <div className="flex flex-col items-center justify-start pt-2">
      <h1 className='mt-2 text-3xl font-bold'>Day 5</h1>

      <div className="flex flex-col sm:flex-row gap-4 px-4 py-4 items-center sm:items-start justify-center">
        
        <TodoProvider>
          <div className='flex flex-col rounded shadow p-8 min-h-120 min-w-100 border-green-400 border-1 ml-2 mr-2'>
            <h1 className='mb-2 text-3xl font-bold text-blue-600 flex justify-center'>ToDo </h1>
            <TodoForm />
            <TodoList />
          </div>
        </TodoProvider>

        <CartProvider>
          <div className="flex flex-col items-center rounded shadow p-8 min-h-120 min-w-100 border-green-400 border-1">
            <h1 className="mb-2 text-3xl font-bold text-blue-600">Cart</h1>
            <ProductList />
            <Cart />
          </div>
        </CartProvider>
        
      </div>

    </div>
  )
}