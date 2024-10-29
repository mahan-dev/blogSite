import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, Divider, Grid2, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const CardEL = ({ title, slug, id, author, coverPhoto }) => {
    return (

        <Card  size={{ xs: 12, md: 6, sm: 4 }} sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: "0.5rem" }}  >
            {
                author && (
                    <CardHeader
                        avatar={<Avatar src={author.avatar.url} />}
                        title={author.name}
                        sx={{ gap: "0.5rem" }}
                    >

                    </CardHeader>

                )
            }

            <CardMedia
                component="img"

                sx={{
                    minWidth: "200px",
                    height: "194px"
                }}
                image={coverPhoto.url}
                alt="Paella dish"
            />
            <CardContent>
                <Typography component="h3" variant='p' fontWeight={600}>
                    {title}
                </Typography>
            </CardContent>
            <Divider sx={{ m: "1rem" }} />
            <Link to={`/Blogs/${slug}`}>
                <Button variant='outlined' sx={{ m: "1rem" }} >
                    مطالعه
                </Button>
            </Link>
        </Card>
    );
};

export default CardEL;