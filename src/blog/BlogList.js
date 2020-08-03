import React, { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContextProvider';
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';
import { BlogActionConst } from '../utils/constant';

const BlogList = () => {
    const { blogs, dispatchBlogs, config } = useContext(BlogContext);

    const onDelete = async (_id) => {
        const res = await fetch(`${config.serverBaseURL}${config.blogEndpoint}/${_id}`, {
            method: 'DELETE'
        });
        if (res.status === 200) {
            dispatchBlogs({ type: BlogActionConst.DELETE_BLOG, _id })
        } else {
            alert('failed');
        }
    }

    return (
        <>
            {(blogs && blogs.length) ? blogs.map((pep) => {
                return (
                    <MDBCol key={pep._id} md='4'>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>{pep.title}</MDBCardTitle>
                                <MDBCardText>{pep.content}</MDBCardText>
                                <MDBBtn onClick={() => onDelete(pep._id)}>Del</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )
            })
                :
                (
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle>No Data</MDBCardTitle>
                                <MDBCardText>Start Writing !!!</MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                )
            }
        </>
    );
}

export default BlogList;