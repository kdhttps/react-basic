import React, { useState, useReducer } from 'react'
import { v1 as uuid } from 'uuid'

import PeopleReducer from '../reducers/PeopleReducer';

import './people.css'

const PeopleManage = () => {
    const [people, setPeople] = useState({
        name: '',
        age: '',
    });

    const [peoples, dispatchPeoples] = useReducer(PeopleReducer, []);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatchPeoples({type: 'ADD_PEOPLE', people: { name: people.name, age: people.age }});
        setPeople({ name: '', age: 0 })
        e.target['name'].focus();
    };

    const onChange = (e) => {
        const target = e.target;
        setPeople({ ...people, [target.name]: target.value })
    };

    const onDelete = (id) => {
        dispatchPeoples({type: 'DELETE_PEOPLE', id})
    }

    return (
        <div>
            <div className="people-container">
                {(peoples && peoples.length) ? peoples.map((pep) => {
                    return (
                        <div key={pep.id} className="people" onClick={() => onDelete(pep.id)}>
                            <h3>{pep.name} <small>{pep.age}</small></h3>
                        </div>
                    )
                })
                    :
                    (
                        <div>
                            <h3>Closed</h3>
                        </div>
                    )
            }
            </div>

            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Enter First Name" onChange={onChange} value={people.name} /> <br />
                <input type="text" name="age" placeholder="Enter age" onChange={onChange} value={people.age} /> <br />
                <input type={"submit"} value={"Save"} />
            </form>
        </div>
    )
}

export default PeopleManage;