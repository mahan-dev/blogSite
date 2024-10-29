import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_POST_COMMENT } from '../../GraphQl/query';
import { useParams } from 'react-router-dom';
import { Avatar, Grid2, Typography } from '@mui/material';

const Comments = () => {

    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_POST_COMMENT, {
        variables: {
            slug
        }
    })

    if (loading) return <div> loading.. </div>
    if (error) return <div> error happened.. </div>

    const { comments} = data;



    return (
        <Grid2 container sx={{
            boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
            p:'1.5rem',
            borderRadius:'0.5rem'
        }} 
        spacing={3}
        >
            <Typography component="p" variant='h5' fontWeight="bold">
                کامنت ها
            </Typography>
            
            {
                data && data.comments.map((comment) => (
                    <Grid2 container size={{ xs: 12 }}
                        key={comment.id}
                        sx={{
                            border:'1px solid #ccc',
                            borderRadius:'0.5rem',
                            p:"1rem",
                            display:'flex',
                            flexDirection:"column"
                        }}
                        spacing={2}
                    >
                        <section className='flex items-center gap-3'>
                        <Avatar>
                            {comment.name}
                        </Avatar>
                        <Typography component="p" variant="p">
                            {comment.name}
                        </Typography>
                        </section>
                        <Typography component="p" variant='p' sx={{ mt:"1rem"}} >
                            {comment.text}
                        </Typography>
                    </Grid2>
                ))
            }
        </Grid2>
    );
};

export default Comments;