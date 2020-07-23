import React, { useContext, useState } from 'react';
import { PeopleContext } from '../contexts/PeopleContextProvider';

const PeopleForm = () => {
    const { dispatchPeoples } = useContext(PeopleContext);

    const [people, setPeople] = useState({
        name: '',
        age: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatchPeoples({ type: 'ADD_PEOPLE', people: { name: people.name, age: people.age } });
        setPeople({ name: '', age: 0 })
        e.target['name'].focus();
    };

    const onChange = (e) => {
        const target = e.target;
        setPeople({ ...people, [target.name]: target.value })
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" placeholder="Enter First Name" onChange={onChange} value={people.name} /> <br />
            <input type="text" name="age" placeholder="Enter age" onChange={onChange} value={people.age} /> <br />
            <input type={"submit"} value={"Save"} />
        </form>
    )
}

export default PeopleForm;