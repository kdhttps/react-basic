import {v1 as uuid} from 'uuid';

const PeopleReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PEOPLE':
            return [...state, {
                id: uuid(),
                name: action.people.name,
                age: action.people.age,
            }]
        case 'DELETE_PEOPLE':
            return state.filter((p) => p.id != action.id)
        default:
            return state;
    };
};

export default PeopleReducer;