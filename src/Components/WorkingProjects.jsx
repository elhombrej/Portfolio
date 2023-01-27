import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import coworkingProjectPhoto from '../images/coworkingProjectPhoto.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export function WorkingProjects() {
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
                    Working projects
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
                                minHeight: 300
                            }}>
                            <CardMedia
                                component="img"
                                alt="Pokemon project"
                                height="140"
                                image={coworkingProjectPhoto}
                            />
                            <CardContent>

                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    fontFamily='monospace'
                                >
                                    Coworking medical companion
                                </Typography>

                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    fontFamily='monospace'
                                >
                                    Individual project developed on Material UI, Redux and React JavaScript and PostgreSQL.
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Button sx={{ textDecoration: 'none' }}>
                                    <a href='https://github.com/elhombrej/Coworking-medical-companion'>
                                        <GitHubIcon />
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