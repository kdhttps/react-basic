import {v1 as uuid} from 'uuid';
import { BlogActionConst } from '../utils/constant';

const BlogReducer = (state, action) => {
    switch(action.type) {
        case BlogActionConst.INIT_BLOGS:
            return [...action.blogs];
        case BlogActionConst.ADD_BLOG:
            return [...state, {
                id: uuid(),
                name: action.blog.name,
                age: action.blog.age,
            }];
        case BlogActionConst.DELETE_BLOG:
            return state.filter((p) => p._id !== action._id);
        default:
            return state;
    };
};

export default BlogReducer;