import { useQuery } from '@apollo/client';
import { Grid, Grid2, Typography } from '@mui/material';
import React from 'react';
import { GET_BLOGS_INFO } from '../../GraphQl/query';
import CardEL from '../../shared/CardEL';

const Blog = () => {


    const {loading, error, data} = useQuery(GET_BLOGS_INFO);

    return (
        <Grid2 container spacing={2} >
            {
                data && data?.posts.map((post)=> (
                    <Grid2 key={post.id}  size={{ xs:12,sm:6 , md:4 }} >
                        <CardEL  {...post} />
                    </Grid2>
                    
                ))
            }

        </Grid2>
    );
};

export default Blog;