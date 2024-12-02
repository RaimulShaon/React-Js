import React from 'react';
import dataServices from '../appwrite/configData';
import { Link } from 'react-router-dom';

function PreviewCard({$id, title, ImgId} ) {
    
    return (
        <Link to = {`/preview/${id}`} >
        <div className='w-full bg-zinc-400 rounded-lg'>
            <div>
                <img src={dataServices.getFilePreview($id)} alt="title" />
            </div>
            <h2>{title}</h2>
        </div>
        </Link>
    );
}

export default PreviewCard;