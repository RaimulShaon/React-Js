import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import dataServices from '../appwrite/configData';
import Container from '../Component/Container/Container';
import PostForm from '../Component/post-form/postForm';

function EditPost(props) {
    const [post, setpost] =useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug) {
            dataServices.getData(slug).then((post)=>{
                if (post) {
                    setpost(post)
                }
            })
        }else{
            navigate('/')
        }
     }, [slug, navigate])

    return post? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ): null
}

export default EditPost;