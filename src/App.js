import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { increment } from './store/actions';
import { decrement } from './store/actions';

function App() {

  const store = useSelector(state => state.reducerAction)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Increment / Decrement Counter</h1>
      <h2>React-Redux</h2>
      <div className='mainCounter'>
        <span onClick={() => dispatch(decrement())}>-</span>
        <input value={store} type="text" />
        <span onClick={() => dispatch(increment())}>+</span>
      </div>
    </div>
  );
}
export default App;
