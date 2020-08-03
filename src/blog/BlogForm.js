import React, { useContext, useState } from 'react';
import { MDBCol, MDBBtn } from 'mdbreact';

import { BlogContext } from '../contexts/BlogContextProvider';
import { BlogActionConst } from '../utils/constant';

const BlogForm = () => {
    const { dispatchBlogs, config } = useContext(BlogContext);

    const [blog, setBlog] = useState({
        title: '',
        content: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(blog)
        const res = await fetch(`${config.serverBaseURL}${config.blogEndpoint}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });

        if (res.status === 200) {
            dispatchBlogs({ type: BlogActionConst.ADD_BLOG, blog })
        } else {
            alert('failed');
            return
        }
    };

    const onChange = (e) => {
        const target = e.target;
        setBlog({ ...blog, [target.name]: target.value })
    };

    return (
        <MDBCol md="6">
            <hr />
            <form onSubmit={onSubmit}>
                <label htmlFor="title" className="grey-text">
                    Title
                </label>
                <input type="text" id="title" className="form-control" name="title" placeholder="Enter title" onChange={onChange} value={blog.title} /> <br />

                <label htmlFor="content" className="grey-text">
                    Content
                </label>
                <input type="text" id="content" className="form-control" name="content" placeholder="Enter content" onChange={onChange} value={blog.content} /> <br />

                <MDBBtn color="unique" type="submit">
                    Add
                </MDBBtn>
            </form>
        </MDBCol>
    )
}

export default BlogForm;