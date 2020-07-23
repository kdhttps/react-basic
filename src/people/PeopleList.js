import React, { useContext } from 'react'
import { PeopleContext } from '../contexts/PeopleContextProvider';

const PeopleList = () => {

    const {peoples, dispatchPeoples} = useContext(PeopleContext);

    const onDelete = (id) => {
        dispatchPeoples({type: 'DELETE_PEOPLE', id})
    }

    return (
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
    );
}

export default PeopleList;