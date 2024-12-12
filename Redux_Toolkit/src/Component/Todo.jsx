import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/TodoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos); // Fixed variable name
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null); // Track the todo being edited
    const [editText, setEditText] = useState(''); // Store the new text

    const handleEdit = (id, currentText) => {
        setEditId(id);
        setEditText(currentText);
    };

    const handleUpdate = () => {
        if (editId !== null && editText.trim() !== '') {
            dispatch(updateTodo({ id: editId, text: editText })); // Dispatch the update action with the new text
        }
        setEditId(null); // Exit edit mode
        setEditText(''); // Clear the input field
    };

    return (
        <>
            <div>TODOS</div>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        {editId === item.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={()=> handleUpdate(setEditText)}>Save</button>
                                <button onClick={() => setEditId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
                                {item.text}
                                <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
                                <button onClick={() => handleEdit(item.id, item.text)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
