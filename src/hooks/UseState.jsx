import { React, useState } from 'react';
import "./app.css";

export default function UseState() {
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    });
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            },
        ]);
    };

    const children = document.getElementById('liItem');
    // const Allchildren = document.getElementById('ulItem');

    const resetItems = () => {
        return (
            children.remove()
        )
    }
    const resetAllItems = () => {
        return (
            setItems([])
        )
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    placeholder='first name'
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='last name'
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })}
                />
                <h1>your first name is {name.firstName}</h1>
                <h1>your last name is {name.lastName}</h1>
            </div><br />
            <div>
                <button onClick={addItem}>add number</button>
                <button onClick={resetItems}>remove last item</button>
                <button onClick={resetAllItems}>reset all items</button>
                <ul>
                    {items.map((item) => (
                        <li key={item.id} id='liItem'>{item.value}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}