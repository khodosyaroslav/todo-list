import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';

function App() {
  const [currentText, changeCurrentText] = useState('');
  const [listOfTodos, changeListOfTodos] = useState(['Buy milk', 'Get eggs', 'Go to work', 'And more...', ]);
  const [listOfSelected, changeListOfSelected] = useState([]);

  const getTask = () => {
    if (currentText.length > 0 && !listOfTodos.includes(currentText)) {
      changeListOfTodos([...listOfTodos, currentText]);
      changeCurrentText("");
    } else {
      changeCurrentText("");
    }
  }

  const setText = (e) => {
    changeCurrentText(e.target.value);
  }

  const handleTaskSelected = (e) => {
    if(!listOfSelected.includes(e.target.value)){
      changeListOfSelected([...listOfSelected, e.target.value]);
    } else {
      const arr = listOfSelected.filter(el => el !== e.target.value);
      changeListOfSelected(arr);
    }
    
  } 

  const removeSelected = () => {
    const arr = listOfTodos.filter(el => !listOfSelected.includes(el));
    changeListOfTodos(arr);
  }

  return (
    <AppWrapper>

      <MainBlock>

        <Header setText={setText}
          currentText={currentText} 
          getTask={getTask} 
          removeSelected={removeSelected} />
        
        <ListOfTasks>
          {
            listOfTodos.map(item => (
              <Task>
                <InputCheckBox name="chkbx" 
                  value={item} 
                  onChange={handleTaskSelected} 
                  checked={listOfSelected.includes(item)} />

                <TaskText selected={listOfSelected.includes(item)}>
                  {item}
                </TaskText>

              </Task>
            ))}
        </ListOfTasks>

      </MainBlock>

    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(blue, pink);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBlock = styled.div`
  width: 900px;
  max-width: 90%;
  height: 800px;
  background: #DEDBD2;
  border-radius: 30px;
`;

const ListOfTasks = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 85%;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
`

const Task = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  align-items:center;
  font-size: 25px;
  justify-content: space-between;
  border-radius: 8px;
`

const InputCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`

const TaskText = styled.div`
  margin-right:auto;
  margin-left: 10px;
  ${({selected}) => 
    selected && `
      text-decoration: line-through;
    `
  }
`

export default App;
