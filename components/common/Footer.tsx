import React from 'react';
import { Box, Container, Grid, Link, makeStyles } from '@material-ui/core';


export const Footer: React.FC = () => {
    return (
        <>
             <div style={{marginTop:"auto", justifyItems:"center"}}>
                <Box style={{backgroundColor:"#4169E1",color:"white",paddingTop:10, paddingBottom:10}}>
                    <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box ><Link href="#" color="inherit">Contact</Link></Box>
                            <Box ><Link href="#" color="inherit">Support</Link></Box>
                            <Box ><Link href="#" color="inherit">Privacy</Link></Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Account</Box>
                            <Box ><Link href="#" color="inherit">Login</Link></Box>
                            <Box ><Link href="#" color="inherit">Register</Link></Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box ><Link href="#" color="inherit">Backup</Link></Box>
                            <Box ><Link href="#" color="inherit">History</Link></Box>
                            <Box ><Link href="#" color="inherit">Roll</Link></Box>
                        </Grid>
                        </Grid>
                        <Box style={{justifyItems:"center",textAlign:"center", paddingTop:10,paddingBottom:10}}>Cliniserve &reg; {new Date().getFullYear()}</Box>
                    </Container>
                </Box>
            </div>
        </>
    );
};
