import React from 'react';
import Authors from './Authors';
import { Container } from '@mui/material';

const OnlyAuthors = () => {
    return (
        <Container maxWidth="lg" sx={{
            my: '2rem'
        }}>
            <Authors />
        </Container>
    );
};

export default OnlyAuthors;