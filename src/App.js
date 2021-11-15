import './App.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import ListOfImportant from './components/ListOfImportant';
import ListOfTodos from './components/ListOfTodos';
import axios from 'axios';

function App() {
  const [currentText, changeCurrentText] = useState('');
  const [listOfTodos, changeListOfTodos] = useState([]);
  const [listOfSelected, changeListOfSelected] = useState([]);
  const [listOfImportant, changeListOfImportant] = useState([]);

  const setTask = () => {
    if (currentText.length > 0 && !listOfTodos.includes(currentText)) {
      changeListOfTodos([...listOfTodos, currentText]);
      changeCurrentText("");
    } else {
      changeCurrentText("");
    }
  };

  const setText = (e) => {
    changeCurrentText(e.target.value);
  };

  const handleTaskSelected = (e) => {
    if (!listOfSelected.includes(e.target.value)) {
      changeListOfSelected([...listOfSelected, e.target.value]);
    } else {
      const arr = listOfSelected.filter((el) => el !== e.target.value);
      changeListOfSelected(arr);
    }

  };

  const removeSelected = () => {
    const arr = listOfTodos.filter((el) => !listOfSelected.includes(el));
    changeListOfTodos(arr);
  };

  const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 66
      }
    });
    const todos = [];
    response.data.map((el) => {
      todos.push(el.title);
    })
    changeListOfTodos(todos);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <AppWrapper>

      <MainBlock>

        <Header setText={setText}
          currentText={currentText}
          setTask={setTask}
          removeSelected={removeSelected} />

        <ListOfTasks>

          <ListOfImportant listOfImportant={listOfImportant}
            handleTaskSelected={handleTaskSelected}
            listOfSelected={listOfSelected}
            listOfTodos={listOfTodos}
            changeListOfTodos={changeListOfTodos}
            changeListOfImportant={changeListOfImportant}
          />

          <ListOfTodos listOfTodos={listOfTodos}
            handleTaskSelected={handleTaskSelected}
            listOfSelected={listOfSelected}
            changeListOfTodos={changeListOfTodos}
            listOfImportant={listOfImportant}
            changeListOfImportant={changeListOfImportant}
          />

        </ListOfTasks>

      </MainBlock>

    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: -webkit-linear-gradient(top, rgb(8, 0, 0) 0%, rgb(39, 29, 71) 25%, rgb(118, 118, 180) 65%, rgb(200, 216, 255) 98%);
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
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export default App;
