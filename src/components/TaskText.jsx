import React, { useState } from 'react';
import styled from 'styled-components';

const TaskText = ({ listOfTodos, changeListOfTodos, item, ind, listOfSelected }) => {
    const [editMode, changeEditMode] = useState(false);
    const [editableTask, changeEditableTask] = useState('');
    const [indexEditable, changeIndexEditable] = useState(-1);

    const activateEditMode = (el) => {
        changeEditMode(true);
        let id = listOfTodos.indexOf(el);
        changeIndexEditable(id);
        changeEditableTask(el);
    };

    const deactivateEditMode = () => {
        changeEditMode(false);
        let newArr = [...listOfTodos];
        for (let i = 0; i < newArr.length; i++) {
            if (i === indexEditable) {
                newArr[i] = editableTask;
            }
        }
        changeListOfTodos(newArr);
    };

    const onTaskChange = (e) => {
        changeEditableTask(e.target.value);
    };


    return (
        <>
            {editMode && ind === indexEditable ? (
                <TaskEdit>
                    <InputText onChange={onTaskChange}
                        value={editableTask}
                        autoFocus={true}
                        onBlur={deactivateEditMode} />
                </TaskEdit>
            ) : (
                <Text selected={listOfSelected.includes(item)} onClick={() => activateEditMode(item)}>
                    {item}
                </Text>
            )}
        </>
    );
}

const Text = styled.div`
  margin-right:auto;
  margin-left: 10px;
  ${({ selected }) =>
        selected &&
        `
      text-decoration: line-through;
    `}
`;

const TaskEdit = styled.div`
  margin-right: auto;
  margin-left: 10px;
`;

const InputText = styled.input`
  font-size: 25px;
`;

export default TaskText;