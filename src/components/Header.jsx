import React from 'react';
import styled from 'styled-components';


// всегда деструктурируй пропсы сразу в параметрах компонента
// const Header = ({currentText, setText, getTask, removeSelected}) => {
// сначала идут переменные потом функции при деструктуризации (просто такая конвенция)
  const Header = (props) => {
    return (
        <>
            <Heading>
                <InputText placeholder="What needs to be done?" onChange={props.setText} value={props.currentText} />

                {/* Если кнопка переиспользуется как правило ее делают компонентом и помещают в components/ */}
                <AddButton onClick={props.getTask}>
                    Add
                </AddButton>
                <RemoveButton onClick={props.removeSelected}>
                    Remove
                </RemoveButton>
            </Heading>
        </>
    );
}

// не пиши return когда не пишешь ничего в теле функций
// пиши так:

// const Header = (props) => (
//       <>
//           <Heading>
//               <InputText placeholder="What needs to be done?" onChange={props.setText} value={props.currentText} />

//               <AddButton onClick={props.getTask}>
//                   Add
//               </AddButton>
//               <RemoveButton onClick={props.removeSelected}>
//                   Remove
//               </RemoveButton>
//           </Heading>
//       </>
//   );

const Heading = styled.div`
  height: 15%;
  background: #4A5759;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputText = styled.input`
  height: 60%;
  font-size: 25px;
  margin-left: 20px;
  margin-right: 5px;
  flex: 1;
`

const AddButton = styled.button`
  background: #B0C4B1;
  height: 60%;
  width: 100px;
  border-radius: 8px;
  margin-right: 5px;
  color: #4A5759;
  cursor: pointer;
  font-size: 20px;
`
const RemoveButton = styled.button`
background: #B0C4B1;
height: 60%;
width: 100px;
border-radius: 8px;
margin-right: 10px;
color: #4A5759;
cursor: pointer;
font-size: 20px;
`

export default Header;