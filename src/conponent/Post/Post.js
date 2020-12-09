import React, { useEffect, useState } from 'react';
import img from '../img/img.jpg'
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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 545,
      margin: '0 auto',
      marginBottom: '15px',
      backgroundColor: '#fff',
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
    //   backgroundColor: red[500],
    },
    rot: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
    icon:{
        marginLeft: '5%'
    },
    posBody: {
        padding: '10px',
    },
  }));



const Post = () => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);
      
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <div style={{backgroundColor: '#E1E1E1', marginTop:'0px'}}>
            {post.map(pos  => 
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                <img style={{width:'150%'}} src={`https://picsum.photos/200/300?random=${post.length ++}`} alt="img"/>
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={`Shrimp and Chorizo Paella -- userId :${pos.userId}`}
                        subheader="September 05, 2020"
                    />

                    <CardContent>
                        <Typography variant="body2" color="textPrimary" component="p">
                            <b> Id :  {pos.id}</b><br/>
                            <b>Title :</b>  {pos.title}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title="Paella dish"
                    />

                        <Typography paragraph  className={classes.posBody} >
                           <b> Post Body : </b>{pos.body}
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
                            className={clsx(classes.expand,classes.rot, {
                                [classes.expandOpen]: expanded,
                            })}>
                            <Link to={`/postDetails/${pos.id}`}>  <Button  variant="contained" color="primary">
                                See More 
                            </Button> </Link>
                        </IconButton>
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
                                Post Id : {pos.id}
                            </Typography>
                            <Typography paragraph>
                                Post Body : {pos.body}
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            )}
        </div>
    );
    
};
export default Post;