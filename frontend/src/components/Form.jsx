import { useState } from 'react'

export default function Form() {
    const [form, setForm] = useState({
        title: '',
        body: ''
    });

    const formHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value })
        console.log(form)
    };
    const formSubmit = (e) => {
        e.preventDefault();
        let toDoData = {
            title: form.title,
            body: form.body
        };
        postTodo(toDoData)
    };
    const postTodo = async (toDoData) => {
        const newTodo = await fetch('http://localhost:9001/todos', {
            method: 'POST',
            body: JSON.stringify(toDoData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const newTodoJson = await newTodo.json();
        console.log(newTodoJson)
        setForm('')
    }

  return (
    <div>
        <h4>Form</h4>
        <form onChange={formHandler} onSubmit={formSubmit}>
            <label>Enter a title</label>
            <input type='text' name='title'/>
            <label>Enter a brief description</label>
            <input type='text' name='body'/>
            <button>Submit!</button>
        </form>
    </div>
  )
}
