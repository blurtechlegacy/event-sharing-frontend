import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../Assets/partyInTheForest.jpg'
import {withRouter} from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/PermIdentity';


const styles = {
    parentCard: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        width: 300,
         maxHeight: 400,
         minHeight: 400,
        marginLeft: '10px',
        marginRight: '20px',
        marginBottom: '25px',
        fontFamily: 'Verdana, Geneva, sans-serif',
        backgroundColor:'rgba(255,255,255,.5)',



    },
    media: {
        height: 10,
        paddingTop: '56.25%', // 16:9
    },
    inCardButton: {
        display: 'flex',
        justifyContent: "space-between",
        alignSelf: 'flex-end'
    }

};


const EventPreview = props => {
    function showMore() {

        props.history.push(`/event/${props.event.id}`);
    }

    const userName = props.users.find(el => {

        return el.id == props.event.host

    });
    const {classes} = props;

    const login = userName && userName.login

    const guests = props.event && props.event.guests && props.event.guests.length;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.event.name}
                    </Typography>
                    <Typography component="p">
                        {login}
                    </Typography>
                    {props.event.description}
                    <Typography>

                    </Typography>
                </CardContent>
                <CardActions className={classes.inCardButton}>
                    <Button size="small" color="primary" onClick={showMore}>
                        Learn More
                    </Button>
                    <Typography>
                        <AddIcon/>
                        {props.event && props.event.guests && props.event.guests.length}
                    </Typography>

                </CardActions>
            </Card>

        </div>
    );
}


export default withStyles(styles)(withRouter(EventPreview));


