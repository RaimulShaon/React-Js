import React, { useEffect, useState } from 'react';
import dataServices from '../appwrite/configData';
import Container from '../Component/Container/Container';
import PreviewCard from '../Component/PreviewCard';

function Home(props) {
    const[post, setPost]= useState(null)

    useEffect(()=>{
        dataServices.getData().then((post)=>{
            if (post) {
                setPost(post.documents)
            }
        })
    }, [])

    if (post <= 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }


    return (
        <div className='w-full py-8'>
            <Container>
                <div>
                    {post.map((item)=>(
                        <div key={post.$id}>
                            <PreviewCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>

        </div>
    );
}

export default Home;