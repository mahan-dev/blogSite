import { useMutation } from '@apollo/client';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SEND_COMMENT } from '../../GraphQl/mutations';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CommentForm = () => {
    const { slug } = useParams();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")


    const [sendComment, { loading, error, data }] = useMutation(SEND_COMMENT, {
        variables: {
            name,
            email,
            text,
            slug
        }
    })


  

    const sendHandler = () => {
        if (!name || !email || !text) {
            toast.warn("!لطفا فیلد هارا پر کنید",
                {
                    position: "top-center"
                }
            )
            return;
        }
        if (name.length <= 4) {
            toast.warn("!نام کاربری باید بیشتر از 4 حرف باشد", {
                position: "top-center"
            })
            return;
        }
        if (text.length < 10) {
            toast.warn("!کامنت باید بیشتر از 10 حرف باشد", {
                position: "top-center"
            })
            return;
        }
        toast.success("!کامنت ارسال شده و منتظر تایید میباشد", {
            position: 'top-center'
        });
        sendComment();
    }



    return (
        <Grid2 container
            sx={{
                boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                p: '1.5rem',
                borderRadius: "0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: '1.5rem',
            }}
        >
            <Grid2 size={{ xs: 12 }} >
                <Typography component="h4" variant='h5' fontWeight="bold">
                    فرم ارسال کامنت
                </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12 }} >
                <TextField
                    label="نام کاربری"
                    onChange={(e) => setName(e.target.value)}
                    variant='outlined'
                    sx={{
                        width: '100%',

                    }}

                />

            </Grid2>

            <Grid2>
                <TextField
                    label="ایمیل"
                    variant='outlined'
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        width: '100%',

                    }}

                />
            </Grid2>
            <Grid2 size={{ xs: 12 }} >
                <TextField
                    label="متن کامنت"
                    onChange={(e) => setText(e.target.value)}
                    variant='outlined'
                    sx={{ width: '100%', my: "0.6rem" }}
                    multiline
                    minRows={4}
                />
            </Grid2>

            {
                loading ? <Button
                    sx={{ width: "fit-content" }}
                    variant='contained'
                    disabled
                >
                    درحال ارسال ...
                </Button> : <Button
                    sx={{ width: "fit-content" }}
                    variant='contained'
                    onClick={sendHandler}
                >
                    ارسال
                </Button>
            }

            <ToastContainer />
        </Grid2>
    );
};

export default CommentForm;