import { Container } from '@mui/material';
import React from 'react';
import Blog from './Blog';

const OnlyBlogs = () => {
    return (
        <Container maxWidth="lg" sx={{
            my: '2rem'
        }}>
            <Blog />
        </Container>
    );
};

export default OnlyBlogs;