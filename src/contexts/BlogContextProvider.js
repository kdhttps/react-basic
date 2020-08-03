import React, { createContext, useReducer, useEffect } from 'react';
import { MDBRow } from 'mdbreact';
import { useQuery } from 'react-query';

import BlogList from '../blog/BlogList';
import BlogForm from '../blog/BlogForm';
import BlogReducer from '../reducers/BlogReducer';
import { fetchStatus, BlogActionConst } from '../utils/constant';
import '../blog/blog.css';
import config from '../config/index';

export const BlogContext = createContext();

const fetchBlogs = async () => {
    const res = await fetch(`${config.serverBaseURL}${config.blogEndpoint}`);
    return res.json();
};

const BlogContextProvider = (children) => {
    // const [blogs, dispatchBlogs] = useReducer(BlogReducer, []);
    const { data, status } = useQuery("blogs", fetchBlogs);
    const [blogs, dispatchBlogs] = useReducer(BlogReducer, []);

    useEffect(() => {
        if (status === fetchStatus.SUCCESS) {
            dispatchBlogs({ type: BlogActionConst.INIT_BLOGS, blogs: data });
        }
    }, [data, status]);

    return (
        <>
            {status === fetchStatus.LOADING ? 'Loading...' : null}
            {status === fetchStatus.ERROR ? 'Error fetching data' : null}
            {status === fetchStatus.SUCCESS ?
                (<BlogContext.Provider value={{ blogs, dispatchBlogs, config }}>
                    <hr />
                    <MDBRow>
                        <BlogList />
                    </MDBRow>
                    <MDBRow>
                        <BlogForm />
                    </MDBRow>
                </BlogContext.Provider>)
                : null}
        </>
    )
}

export default BlogContextProvider;