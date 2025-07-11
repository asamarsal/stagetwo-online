import { TodoProvider } from './context/TodoProvider';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { CartProvider } from './context/CartProvider';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function Taskfive() {
    return (
    <div className="flex flex-col items-center justify-start pt-2">
      <h1 className='mt- text-3xl font-bold text-blue-600'>Day 5</h1>

      <div className="flex flex-row px-4 gap-4 items-center justify-center py-4">
        
        <TodoProvider>
          <div className='flex flex-col rounded shadow p-8 min-h-120 min-w-120 border-blue-600 border-1'>
            <h1 className='mb-2 text-3xl font-bold text-blue-600 flex justify-center'>ToDo </h1>
            <TodoForm />
            <TodoList />
          </div>
        </TodoProvider>

        <CartProvider>
          <div className="flex flex-col items-center rounded shadow p-8 min-h-120 min-w-120 border-blue-600 border-1">
            <h1 className="mb-2 text-3xl font-bold text-blue-600">Cart</h1>
            <ProductList />
            <Cart />
          </div>
        </CartProvider>
        
      </div>

    </div>
  )
}