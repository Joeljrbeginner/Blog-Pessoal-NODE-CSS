import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { Component } from '@marerial-ui/core';
import React from 'react';
function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#3F51B5", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>segue nóis na net </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://pt-br.facebook.com/cityofnorthpole/photos/?tab=album&album_id=1572800969470022" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/doing_dumb/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/company/portal-vaticano/about/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#303F9F", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 1910 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                            </a>
                            <footerComponent></footerComponent>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;