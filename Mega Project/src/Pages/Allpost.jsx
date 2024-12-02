import React, { useEffect, useState } from 'react';
import dataServices from '../appwrite/configData';
import Container from '../Component/Container/Container';
import PreviewCard from '../Component/PreviewCard';

function Allpost(props) {
    const [post, setPosts] =useState([])
    useEffect(()=>{})
    dataServices.getPosts([]).then((post)=>{
        if (post) {
            setPosts(post.documents)
        }
    })
    return (

        <div className='w-full py-8'>
            <Container>
                <div>{post.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PreviewCard {...post} />
                    </div>))}

                </div>
            </Container>
        </div>
    );
}

export default Allpost;