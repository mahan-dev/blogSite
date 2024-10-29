import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_AUTHOR_INFO } from '../../GraphQl/query';
import { useParams } from 'react-router-dom';
import { Avatar, Container, Divider, Grid, Grid2, Typography } from '@mui/material';
import sanitizeHtml from "sanitize-html"
import CardEL from '../../shared/CardEL';
import Loader from '../Loader/Loader';

const AuthorPage = () => {

    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_AUTHOR_INFO, {
        variables: {
            slug
        }
    });
    
    if (loading) return (
        <section className='min-h-[100vh] flex flex-col items-center justify-center'>
            <Loader />
        </section>

    )
    if (error) return <div>error happened</div>
    const { author: { avatar: { url }, description: { html }, name, field, post } } = data;

    return (
        <Container maxWidth='lg'>
            <Grid2 container>
                <Grid2 size={{ xs: 12 }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: "center",
                        gap: "1.4rem",
                        my: "2rem"
                    }}>
                    <Avatar src={url}
                        sx={{
                            minWidth: "100px",
                            minHeight: "100px",
                            display: "flex",

                        }}
                    />



                    <Typography component="h3" variant="h6" fontWeight="bold" >{name}</Typography>
                    <Typography component="h3" variant="p"> {field} </Typography>

                    <Typography component="p" variant='p' dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}>
                    </Typography>
                </Grid2>

                <Grid2 className="w-full">
                    <Typography component="h3" variant='h5' fontWeight="bold">
                        مقالات
                    </Typography>
                    <Grid2>

                        <Divider sx={{ mt: "1rem" }} />
                    </Grid2>
                    <Grid2 container sx={{ width: 'fit-content' }} spacing={2}>

                        {
                            post && post.length > 0 && (


                                post.map(authorPost => (
                                    <Grid2 sx={{ my: "2rem", minWidth: "fit-content" }} size={{ xs: 12, md: 6, sm: 4, }} key={authorPost.id}>
                                        <CardEL title={authorPost.title} slug={authorPost.slug} coverPhoto={authorPost.coverPhoto} />
                                    </Grid2>


                                )))

                        }
                    </Grid2>

                    <Grid2 >
                        {
                            !post.length > 0 && (
                                <section className='flex justify-center mt-[5rem] w-full'>
                                    <p className=''>
                                        پستی پیدا نشد
                                    </p>
                                </section>
                            )
                        }
                    </Grid2>


                </Grid2>
            </Grid2>
        </Container>
    );
};

export default AuthorPage;