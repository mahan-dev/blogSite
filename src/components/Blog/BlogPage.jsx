import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_POST_INFO } from '../../GraphQl/query';
import { useQuery } from '@apollo/client';
import { Avatar, Container, Grid, Grid2, Typography } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loader from '../Loader/Loader';
const BlogPage = (p) => {
    
    
           
    const { slug } = useParams();
    const navigate = useNavigate();


    const { loading, error, data } = useQuery(GET_POST_INFO, {
        variables: { slug }
    })
    

    if (loading) return (
        <section className='min-h-[100vh] flex flex-col items-center justify-center'>
            <Loader />
        </section>

    )
    if (error) return <div className="min-h-[100vh]"> error ... </div>

    const {
        post: {
            title,
            coverPhoto: { url },
            author: { avatar, name, field },
            content,
        } } = data;




    return (
        <Container maxWidth="lg" id="blogPage_container" className='scroll-smooth' >
            <Grid2 container sx={{ my: '2rem' }}  >
                <Grid2 size={{ xs: 12 }} sx={{ display: "flex", flexDirection: 'column', gap: '1rem' }}>


                    <Grid2 size={{ xs: 12 }} sx={{ display: "flex", justifyContent: "space-between" }} >
                        <Typography component="h2" variant='h6' fontWeight="bold">

                            {title}
                        </Typography>
                        <ArrowBackIcon
                            sx={{
                                cursor: "pointer"
                            }}
                            onClick={() => navigate(-1)}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }} >
                        <img src={url} alt="" style={{ height: "400px", width: "100%", objectFit: "cover", borderRadius: "0.5rem" }} />
                    </Grid2>
                    <Grid2 sx={{ display: 'flex' }} >
                        <section className='flex items-center gap-4'>

                            <Avatar src={avatar.url} sx={{ width: "100px", height: '100px' }} />
                            <section>

                                <Typography component="p" variant='p' fontWeight="bold" >
                                    {name}
                                </Typography>
                                <Typography color='textSecondary' >
                                    {field}
                                </Typography>
                            </section>
                        </section>
                    </Grid2>
                    <Grid2 sx={{ my: '1.5rem' }} >
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}>

                        </div>
                    </Grid2>
                    <Grid2>

                        <CommentForm />
                    </Grid2>
                    <Grid2>
                        <Comments />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default BlogPage;