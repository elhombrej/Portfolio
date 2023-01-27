import { BottomNavigation, BottomNavigationAction, Card, CardContent, Grid, Paper, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import HardwareIcon from '@mui/icons-material/Hardware';
import { Main } from "./Main";
import { useTheme } from "@mui/material/styles";
import { DoneProjects } from "./DoneProjects";
import { WorkingProjects } from "./WorkingProjects";
import { Knowledge } from "./Knowledge";

export function LandingPage({ mode, setMode }) {

    const [checked, setChecked] = useState(true);

    const [currentPage, setCurrentPage] = React.useState(<Main />);

    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setMode(mode === "light" ? "dark" : "light");
    };

    const handleClick = (element) => {
        // element.preventDefault()
        console.log(element)
        setCurrentPage(element)
    };

    let navigate = useNavigate();

    const theme = useTheme();

    return (
        <Paper
            sx={{
                minHeight: '110vh'
            }}
        >

            <Helmet>
                <title>Portfolio</title>
            </Helmet>

            <Grid
                container
                direction='column'
                justifyContent="center"
                alignItems="center"
                paddingTop={3}
                spacing={4}
            >
                <Grid
                    item
                >
                    <Brightness7Icon />
                    <Switch checked={checked} onChange={handleChange} />
                    <Brightness4Icon />

                </Grid>

                <Grid
                    item
                    paddingBottom={10}
                >
                    <Card
                        variant='outlined'
                        sx={{
                            // paddingBottom: 10,
                            backgroundColor:
                                theme.palette.mode === "light" &&
                                "#eeeeee",
                            width: '60vw'
                        }}
                    >
                        <CardContent>
                            {currentPage}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid
                    item
                >
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction
                                label="Information"
                                icon={<InfoIcon />}
                                onClick={() => handleClick(<Main />)}
                            />

                            <BottomNavigationAction
                                label="Done projects"
                                icon={<DoneAllIcon />}
                                onClick={() => handleClick(<DoneProjects />)}
                            />

                            <BottomNavigationAction
                                label="Working projects"
                                icon={<HardwareIcon />}
                                onClick={() => handleClick(<WorkingProjects />)}
                            />

                            <BottomNavigationAction
                                label="Knowledge"
                                icon={<CodeIcon />}
                                onClick={() => handleClick(<Knowledge />)}
                            />

                        </BottomNavigation>

                    </Paper>

                </Grid>

            </Grid>
        </Paper >
    )
};