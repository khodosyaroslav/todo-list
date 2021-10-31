import React from 'react';
import styled from 'styled-components';
import TaskText from './TaskText';

const ListOfTodos = ({ listOfTodos, handleTaskSelected, listOfSelected, changeListOfTodos, listOfImportant, changeListOfImportant }) => {

    const addToImportant = (ind) => {
        const elem = listOfTodos[ind];
        changeListOfImportant([...listOfImportant, elem]);
        const arr = listOfTodos.filter((el) => el !== elem);
        changeListOfTodos(arr);
    }

    return (
        <>
            {listOfTodos.map((item, ind) => (
                <Task key={ind}>
                    <InputCheckBox name="chkbx"
                        value={item}
                        onChange={handleTaskSelected}
                        checked={listOfSelected.includes(item)}
                    />

                    <TaskText listOfTodos={listOfTodos}
                        changeListOfTodos={changeListOfTodos}
                        item={item}
                        ind={ind}
                        listOfSelected={listOfSelected}
                    />

                    <ImportantNonActive src={"/images/important2.png"} alt='i2' onClick={() => addToImportant(ind)} />

                </Task>
            ))}
        </>
    );
}

const Task = styled.div`
  width: 100%;
  height: 10%;
  display:flex;
  align-items:center;
  font-size: 25px;
  justify-content: space-between;
  border-radius: 8px;
`;

const InputCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

const ImportantNonActive = styled.img`
  width: 45px;
  height: 45px;
  margin-left: auto;
  opacity: 0.08;
  cursor: pointer;
`;

export default ListOfTodos;