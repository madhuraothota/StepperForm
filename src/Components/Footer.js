import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from '../images/logo.png';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Playstore from '../images/Playstore.png';
import Appstore from '../images/Appstore.png';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <Box
            bgcolor="text.secondary"
            color="white"
        >
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <Item>
                        <img src={Logo} alt='logo' />
                    </Item>
                </Grid>
                <Grid item xs={4} sm={1}>
                    <Box>
                        <Link href='/' color="inherit">Pages</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Courses</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Freebies</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Paths</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Deals</Link>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={1}>
                    <Box>
                        <Link href='/' color="inherit">ABOUT</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">About Us</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Contact Us</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Terms & Conditions</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Infinit T&C</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Instructors Policy</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Private Policy</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">FAQ</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Sitemap</Link>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={1}>
                    <Box>
                        <Link href='/' color="inherit">HELPFUL LINKS</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Gift Voucher</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Our Webblog</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Affiliates</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Teach For Us</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Opportunities</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">Corporate Training</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box>
                        <Link href='/' color="inherit">JOIN US</Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit"><FacebookIcon /></Link>
                        <Link href='/' color="inherit"><TwitterIcon /></Link>
                        <Link href='/' color="inherit"><YouTubeIcon /></Link>
                        <Link href='/' color="inherit"><LinkedInIcon /></Link>
                        <Link href='/' color="inherit"><InstagramIcon /></Link>
                    </Box>
                    <Box>
                        <Link href='/' color="inherit">DOWNLOAD OUR APP</Link>
                    </Box>
                    <Box>
                        <Link href='/'><img src={Playstore} alt='playstore' /></Link>
                    </Box>
                    <Box>
                        <Link href='/'><img src={Appstore} alt='appstore' /></Link>
                    </Box>

                </Grid>
            </Grid>
            <Box textAlign="center" backgroundColor="black" pt={{ xs: 1 }} pb={{ xs: 1 }}>
                &copy;2022 Eduonix Learning Solutions Pvt Ltd.All Rights Reserved
            </Box>
        </Box>
    );
}

export default Footer;