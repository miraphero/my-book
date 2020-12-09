import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FakeData from '../FakeData/FakeData';
import MHJ7 from '../img/MHJ7.png'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 545,
      margin : '0 auto',
    },
    shareBtn: {
        marginLeft:'25%',
    },
    likeBtn: {
        marginLeft:'25%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));

const Comment = (props) => {
    const {com, id} = props;
    
    const classes = useStyles();

//     const [image, setImages] = useState([])
//     useEffect(() =>{
//         fetch(`https://picsum.photos/200`)
//         .then(res => res.json())
//         .then(data => setImages(data))
//     },[])
// console.log(image)
    return (
        <div>
             
            <Card className={classes.root} style={{marginBottom:'20px'}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    <img style={{width:'150%'}} src={`https://picsum.photos/200/300?random=${com.id}`} alt=""/>
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={`name : ${com.name}  _ id : ${com.id}`}
                    subheader={`email: ${com.email}`}
                />
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">
                        <b> Comment : </b>{com.body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton className={classes.likeBtn} aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton className={classes.shareBtn} aria-label="share">
                    <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Comment;