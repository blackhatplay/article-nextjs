import { Avatar, Box, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        background: '#2d2d38',
        marginBottom: '2rem',
        margin: '0.5rem',
    },
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        fontSize: '2rem',
    },
    details: {
        textAlign: 'center',
    },
}));

const UserInfo = ({ user }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant='outlined'>
            <CardContent>
                <Grid container alignItems='center' justifyContent='center' spacing={1}>
                    <Grid item>
                        <Avatar alt={user.username} src='https://source.unsplash.com/ZHvM3XIOHoE/500x500' className={classes.avatar} />
                    </Grid>
                    <Grid item className={classes.details}>
                        <Typography variant='body1'>{user.username}</Typography>
                        <Typography variant='body1'>{user.email}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UserInfo;
