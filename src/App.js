// 1. сначала идут импортs либ
// 32 потом идут импорты твоих файлов через Enter
import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  const [currentText, changeCurrentText] = useState("");
  const [listOfTodos, changeListOfTodos] = useState([
    "Buy milk",
    "Get eggs",
    "Go to work",
    "And more...",
  ]);
  const [listOfSelected, changeListOfSelected] = useState([]);

  const getTask = () => {
    // would be better to name it setTask because get means receive - not add
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

  return (
    <AppWrapper>
      <MainBlock>
        <Header
          setText={setText}
          currentText={currentText}
          getTask={getTask}
          removeSelected={removeSelected}
        />

        <ListOfTasks>
          {listOfTodos.map((item) => (
            <Task>
              <InputCheckBox
                name="chkbx"
                value={item}
                onChange={handleTaskSelected}
                checked={listOfSelected.includes(item)}
              />

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

// Нейминг стайлд компонентов я бы немного изменил:
//  - так как стили стайлд компонентов ты инициализируешь в компоненте X для стилизация компонента X,
// не обязательно включать в название стайлд компонента - нзвание компонента X
// например: у тебя есть компонент App и ты хочешь создать в нем Список или Wrapper,
// не надо называть это AppContainer или AppWrapper, можно просто написать Wrapper :) 

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(blue, pink);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Если хочешь создать контейнер - всегда делай его отдельным реакт компонентом
// и засовывай в папку /components как отдельный компонент типа Header

const MainBlock = styled.div`
  width: 900px;
  max-width: 90%;
  height: 800px;
  background: #dedbd2;
  border-radius: 30px;
`;

// ListOfTasks - можно менее конкрнетно типа List или TasksList, таска соответственно Item или TasksItem

const ListOfTasks = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  height: 85%; // задать хейт плохая практика в 95% случаев.
  border-bottom-right-radius: 1em; // везде пиши пиксели
  border-bottom-left-radius: 1em; // пиксели
`;

const Task = styled.div`
  width: 100%;
  height: 10%; // тоже самое правило с хейт
  display: flex;
  align-items: center;
  font-size: 25px;
  justify-content: space-between;
  border-radius: 8px;
`;

// почему именно так?
// а не вот так
// const InputCheckBox = styled.input` 
const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const TaskText = styled.div`
  margin-right: auto;
  margin-left: 10px;
  
  ${({ selected }) =>
    selected &&
    `
      text-decoration: line-through;
    `}
`;

export default App;
