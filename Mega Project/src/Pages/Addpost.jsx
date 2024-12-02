import React from 'react';
import Container from '../Component/Container/Container';
import postForm from '../Component/post-form/postForm';

function Addpost(props) {
    return (
        <div>
            <Container>
                <postForm/>
            </Container>
        </div>
    );
}

export default Addpost;