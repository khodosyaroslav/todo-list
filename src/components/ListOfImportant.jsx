import React from 'react';
import styled from 'styled-components';
import TaskText from './TaskText';

const ListOfImportant = ({ listOfImportant, handleTaskSelected, listOfSelected, listOfTodos, changeListOfTodos, changeListOfImportant }) => {

    const removeFromImportant = (ind) => {
        const elem = listOfImportant[ind];
        changeListOfTodos([...listOfTodos, elem]);
        const arr = listOfImportant.filter((el) => el !== elem);
        changeListOfImportant(arr);
    }

    return (
        <>
            {listOfImportant.map((item, ind) => (
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

                    <ImportantActive src={"/images/important2.png"} alt='i1' onClick={() => removeFromImportant(ind)} />

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

const ImportantActive = styled.img`
  width: 45px;
  height: 45px;
  margin-left: auto;
  cursor: pointer;
`;

export default ListOfImportant;