import React, { createContext, useReducer } from 'react';
import PeopleList from '../people/PeopleList';
import PeopleForm from '../people/PeopleForm';
import PeopleReducer from '../reducers/PeopleReducer';
import '../people/people.css';

export const PeopleContext = createContext();

const PeopleContextProvider = () => {
    const [peoples, dispatchPeoples] = useReducer(PeopleReducer, []);

    return (
        <PeopleContext.Provider value={{ peoples, dispatchPeoples}}>
            <PeopleList />
            <PeopleForm />
        </PeopleContext.Provider>
    )
}

export default PeopleContextProvider;