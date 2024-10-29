import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POST_DETAILS } from '../../GraphQl/query';
import { Avatar, Divider, Grid2, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Authors = () => {


    const { loading, error, data } = useQuery(GET_POST_DETAILS);

    // const {author:{name}, author:{avatar:{url}}} = posts || [];
    // const authors = data.posts ? data.posts.author : {};
    const authors = data ? data.authors : [];



    return (
        <section>
            <Grid2 sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "0.5rem" }}>
                {authors.map((author, index) => (
                    <React.Fragment key={author.id}>
                        <Grid2>
                            <Link to={`/authors/${author.slug}`} className='flex items-center gap-2 p-4'>
                                <Typography sx={{ order: "1" }}>
                                    {author.name}
                                </Typography>
                                <Avatar src={author.avatar.url} />
                            </Link>

                        </Grid2>
                        {
                            index !== authors.length - 1 && (
                                <Grid2 size={{ xs: 12 }} >

                                    <Divider variant='middle' />
                                </Grid2>
                            )
                        }
                    </React.Fragment>
                ))}
            </Grid2>
        </section>
    );
};

export default Authors;