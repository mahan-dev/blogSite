import { Container, Grid, Grid2, Typography } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Blog from '../Blog/Blog';
import Authors from '../Authors/Authors';

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Grid2 container spacing={3} sx={{ mt: "3rem", mb: "2rem"}} >
                <Grid2 size={{ xs: 12, md: 3 }}>
                    <Typography component="h2" mb="1rem"  variant='h5' fontWeight="bold" >
                        نویسنده ها
                    </Typography>
                    <Authors />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 9 }} >
                    <Typography component="h2" mb="1rem"  variant='h5' fontWeight="bold">
                        بلاگ ها
                    </Typography>

                    <Blog />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default HomePage;