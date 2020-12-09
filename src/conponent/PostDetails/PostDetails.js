import React, { useEffect, useState } from 'react';
import img from '../img/img.jpg'
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comment from '../Commant/Comment';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FakeData from '../FakeData/FakeData';


    //css style -->
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
    avatar: {
      backgroundColor: red[500],
    },
    icon:{
        paddingLeft: '12%'
    },
  }));

//post Details
const PostDetails = () => {

    //post Details id useParams -->
    const {id} = useParams()

    //post Details useEffect -->
    const [pdDetail, setPdDetail] = useState([])
    const {userId, title, body} = pdDetail;
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPdDetail(data))
    },[])

    //comment useEffect -->
    // const [images, setImages] = useState(FakeData)
    
    const [comment, setComment] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])

    

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <div style={{backgroundColor:'#E1E1E1', margin: '0'}}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        <img style={{width:'150%'}} src={`https://picsum.photos/200/300?random=${id}`} alt=""/>
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={`Shrimp and Chorizo Paella -- userId :${userId}`}
                    subheader="September 05, 2020"
                />
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">
                        <b>Id :  {id}</b><br/>
                        <b>Posts Title :</b>  {title}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Paella dish"
                />
                <Typography paragraph>
                    <h4> Post details :  </h4><b>{body}</b>
                </Typography>
                <CardActions disableSpacing>

                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        
                        >
                        <BottomNavigationAction className={classes.icon} label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction className={classes.icon} label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction className={classes.icon} label="Nearby" icon={<LocationOnIcon />} />
                        <IconButton className={classes.icon} aria-label="share"><ShareIcon /></IconButton>
                    </BottomNavigation>

                    
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Post details :</Typography>
                    <Typography paragraph>
                        <b>{body}</b>
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
                <br/>
            {/* ----------------------> */}


            {/* post  Comments ----> */}
            { comment.map(com=> <Comment id={id} com={com}></Comment>)}
            
            {/* {
                images.map(imge => <Comment imge={imge}></Comment>)
            } */}
        </div>
    );
};

export default PostDetails;