import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import sleepTrackerPhoto from '../images/sleepTrackerPhoto.png'
import pokemonProjectPhoto from '../images/pokemonProjectPhoto.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { makeStyles } from "@mui/styles";

export function DoneProjects() {

    const classes = useStyles();

    return (
        <Grid
        container
        direction='column'
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={3}
        spacing={4}
        >
            <Grid
                item
            >
                <Typography
                    variant='h3'
                    fontFamily='monospace'
                    fontWeight='bold'
                >
                    Done projects
                </Typography>

            </Grid>

            <Grid
                item
            >
                <Grid
                    container
                    direction='row'
                    justifyContent="center"
                    alignItems="center"
                    paddingTop={3}
                    spacing={4}
                >
                    <Grid
                        item
                    >
                        <Card
                            sx={{
                                maxWidth: 300,
                                height: 300
                            }}>
                            <CardMedia
                                component="img"
                                alt="Pokemon project"
                                height="140"
                                image={pokemonProjectPhoto}
                            />
                            <CardContent>

                                <Typography
                                    gutterBottom
                                    variant="h5" c
                                    omponent="div"
                                    fontFamily='monospace'
                                >
                                    Pokemon project
                                </Typography>

                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    fontFamily='monospace'
                                >
                                    Individual project developed on plain CSS, Redux and React JavaScript, using pokemon API.
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Button sx={{textDecoration:'none'}}>
                                    <a href='https://github.com/elhombrej/sleep-tracker'>
                                        <GitHubIcon />
                                    </a>
                                </Button>

                                <Button>
                                    <a href='https://pi-pokemon-main-one.vercel.app'>
                                        <LaunchIcon />
                                    </a>
                                </Button>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid
                        item
                    >
                        <Card
                            sx={{
                                maxWidth: 300,
                                height: 300
                            }}>
                            <CardMedia
                                component="img"
                                alt="sleep tracker project"
                                height="140"
                                image={sleepTrackerPhoto}
                            />
                            <CardContent>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    fontFamily='monospace'
                                >
                                    Sleep tracker
                                </Typography>

                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    fontFamily='monospace'
                                >
                                    Groupal project developed on Material UI, Redux and React JavaScript, using FitBit API.
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Button>
                                    <a href='https://github.com/elhombrej/sleep-tracker'>
                                        <GitHubIcon />
                                    </a>
                                </Button>

                                <Button>
                                    <a href='https://sleep-tracker-two.vercel.app'>
                                        <LaunchIcon />
                                    </a>
                                </Button>

                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>
    )
};

const useStyles = makeStyles(() => ({
    decoration: {
        textDecoration:'none'
    },

  }));
  