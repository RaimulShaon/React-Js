import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import dataServices from '../appwrite/configData';
import Container from '../Component/Container/Container';
import { Link } from 'react-router-dom';

function Post(props) {
    const [post, setPost] = useState()
    const {slug}= useParams()
    const navigate = useNavigate()
    const userData = useSelector((state)=> state.auth.userData)
    const author = post && userData? post.userId === userData.$id : false;

    useEffect(()=>{
        if (slug) {
            dataServices.getData(slug).then((post)=>{
                if (post) {
                    setPost(post)
            
                }else{
                    navigate("/")
                }
            })
        }
    }, [slug, navigate])

    const deletePost = ()=>{
        dataServices.deleteData(post.$id).then((status)=>{
            if (status) {
                dataServices.deleteFile(post.featureImg)
                navigate("/")
            }
        })
    } 

    return post?(
        <div>
            <Container>
                <div>
                    <img src={dataServices.getFilePreview(post.featureImg)} alt= {post.title} className='rounded-lg' />
                    {author && ( <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                        
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ):null
}

export default Post;