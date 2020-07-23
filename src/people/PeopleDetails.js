import React, { useState } from 'react'
import {v1 as uuid} from 'uuid'
import './people.css'

const PeopleDetails = () => {
    const [people, setPeople] = useState({
        name: '',
        age: '',
    });

    const [peoples, setPeoples] = useState([{
        id: uuid(),
        name: 'Kiran',
        age: 25
    }, {
        id: uuid(),
        name: 'Rajesh',
        age: 26
    }]);

    const onSubmit = (e) => {
        e.preventDefault();
        setPeoples([...peoples, {id: uuid(), name: people.name, age: people.age}]);
        setPeople({name: '', age: 0})
        e.target['name'].focus();
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPeople({ ...people, [name]: value })
    };

    return (
        <div>
            <div className="people-container">
                {peoples.map((people) => {
                    return <div key={people.id} className="people"><h3>{people.name} <small>{people.age}</small></h3></div>
                })}
            </div>

            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Enter First Name" onChange={onChange} value={people.name} /> <br />
                <input type="text" name="age" placeholder="Enter age" onChange={onChange} value={people.age} /> <br />
                <input type={"submit"} value={"Save"} />
            </form>
        </div>
    )
}

export default PeopleDetails;