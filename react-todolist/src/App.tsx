import { useEffect, useState } from 'react';
import OutlineInput from './components/Outline-Input';
import PrimaryButton from './components/Primary-Button';
import ToDo from './components/ToDo';
import TextButton from './components/TextButton';
interface Todo {
  isComplete: boolean;
  value: string;
}
function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (value: string) => {
    const newTodo: Todo = {
      isComplete: false,
      value,
    }
    setTodoList ((currentList) => ([...currentList, newTodo]));
  }

  const toggleTodo = (index: number) => {
    setTodoList ((currentList) => {
      const newList = [...currentList];
      newList[index].isComplete = !newList[index].isComplete;
      return newList;
    });
  }

  const getUncompletedToDo = (list: Todo[]) =>{
    return list.filter((todo) => !todo.isComplete);
  }

  const deleteAllCompletedTodo = () => {
    setTodoList((currentList) => (getUncompletedToDo(currentList)));
  };
    useEffect(() => {
    // console.log('todoList', todoList);
  }, [todoList]);
  return (
    <div className="app">
      <h1 className="app-title">&#128466; To Do List</h1>

      <div className="app-form">
				{/* <OutlineInput />과 <PrimaryButton />를 추가할 곳 */}
        <OutlineInput
          value={inputValue}
          onChange={(v) => setInputValue(v)}
          placeholder="무엇을 해야하나요?"
        />
        <PrimaryButton
          label="할 일 추가"
          onClick={() => addTodo(inputValue) } />
        
      </div>

      <div className="app-list">
				{/* <ToDo />를 리스트 만큼 생성할 곳 */}
        {todoList.map((todo, index) =>
          <ToDo
            key={index}
            isComplete={todo.isComplete}
            value={todo.value}
            onClick={() => toggleTodo(index)}
            deleteAllCompletedTodo={deleteAllCompletedTodo}
          />
        )}
      </div>

      <div className='app-footer'>
				{/* 남은 일 개수와 <TextButton /> 추가할 곳 */}
        <p>남은 일 :{getUncompletedToDo(todoList).length}개</p>
        <TextButton
          label="완료 목록 삭제"
          onClick={()=>deleteAllCompletedTodo()}
        />
      </div>
    </div>
  );
}

export default App
