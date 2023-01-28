import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import sleepTrackerPhoto from '../images/sleepTrackerPhoto.png'
import pokemonProjectPhoto from '../images/pokemonProjectPhoto.png'
import candyShopInterfacePhoto from '../images/candyShopInterfacePhoto.png'
import candyShopTerminalPhoto from '../images/candyShopTerminalPhoto.png'
import portfolioPhoto from '../images/portfolioPhoto.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export function DoneProjects() {

    const cardInfo = [
        {
            image: sleepTrackerPhoto,
            title: 'Sleep tracker',
            description: 'Groupal project developed on Material UI, Redux and React JavaScript, using FitBit API and PostgreSQL.',
            gitHubButton: 'https://github.com/elhombrej/sleep-tracker.git',
            webSiteButton: 'https://sleep-tracker-two.vercel.app',
        },
        {
            image: pokemonProjectPhoto,
            title: 'Pokemon project',
            description: 'Individual project developed on plain CSS, Redux and React JavaScript, using pokemon API and PostgreSQL.',
            gitHubButton: 'https://github.com/elhombrej/Pokemon-project.git',
            webSiteButton: 'https://pi-pokemon-main-one.vercel.app',
        },
        {
            image: candyShopInterfacePhoto,
            title: 'Candy shop interface',
            description: 'Groupal project developed on Java and Java Swing.',
            gitHubButton: 'https://github.com/elhombrej/CandyShopInterface.git',
            webSiteButton: '',
        },
        {
            image: candyShopTerminalPhoto,
            title: 'Candy shop terminal',
            description: 'Individual project developed on plain Java.',
            gitHubButton: 'https://github.com/elhombrej/CandyShopTerminal.git',
            webSiteButton: '',
        },
        {
            image: portfolioPhoto,
            title: 'This portfolio',
            description: 'Portfolio developed with React and Material UI.',
            gitHubButton: 'https://github.com/elhombrej/Portfolio.git',
            webSiteButton: '',
        },

    ]

    return (
        <Grid
            container
            direction='column'
            justifyContent="center"
            alignItems="center"
            paddingTop={3}
            spacing={4}
            sx={{maxWidth:{sm:'70vw', xs:'100vw'}}}
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

                    {cardInfo.map(element =>
                        < Grid
                            item
                        >
                            <Card
                                sx={{
                                    maxWidth: 300,
                                    minHeight: 400,
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    alt={element.title}
                                    height="140"
                                    image={element.image}
                                />
                                <Grid
                                    container
                                    direction='column'
                                    alignItems='center'
                                    justifyContent='space-between'
                                >

                                    <Grid
                                        item
                                    >
                                        <CardContent>

                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                                fontFamily='monospace'
                                            >
                                                {element.title}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                fontFamily='monospace'
                                            >
                                                {element.description}
                                            </Typography>

                                        </CardContent>
                                    </Grid>

                                    <Grid
                                        item
                                    >

                                        <Grid
                                            container
                                            sx={{
                                                direction: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-evenly',
                                            }}
                                            spacing={5}
                                        >
                                            {
                                                element.gitHubButton !== '' &&
                                                <Grid
                                                    item
                                                >
                                                    <a href={element.gitHubButton}>
                                                        <GitHubIcon
                                                            sx={{
                                                                fontSize: 40,
                                                                // marginRight: 3
                                                            }}
                                                        />
                                                    </a>
                                                </Grid>
                                            }

                                            {
                                                element.webSiteButton !== '' &&
                                                <Grid
                                                    item
                                                >
                                                    <a href={element.webSiteButton}>
                                                        <LaunchIcon
                                                            sx={{
                                                                fontSize: 40,
                                                                // marginLeft: 3
                                                            }}
                                                        />
                                                    </a>
                                                </Grid>
                                            }

                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Card>
                        </Grid >

                    )}

                </Grid>
            </Grid>

        </Grid>
    )
};
