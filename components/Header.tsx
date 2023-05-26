
import Link from "next/link";
import LoginModal from '../components/LoginModal';
import { Box, Typography, Button } from '@mui/material'

const Header = () => {

    return (
        <div style={{ display: "flex", backgroundColor: "white", height: "80px", justifyContent: "space-around", alignItems: "center", borderBottom: "solid grey 1px" }} >
            <Box display="flex"  >
                <Link href="/" passHref legacyBehavior>
                    <Typography variant="h4" component="h1" color="textSecondary" mr={2} >
                        MindPair
                    </Typography>
                </Link>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box width={450} height="35px" display="flex" flexDirection="row" justifyContent="space-around" >
                    <Link href="/about" passHref legacyBehavior>
                        <Button variant="contained" href="/">
                            About
                        </Button>
                    </Link>
                    <Link href="/findMentors" passHref legacyBehavior>
                        <Button variant="contained" href="/">
                            Find mentors
                        </Button>
                    </Link>
                    <Link href="/dashboard" passHref legacyBehavior>
                        <Button variant="contained" href="/">
                            Dashboard
                        </Button>
                    </Link>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-around" >
                    <Link href="/login" passHref legacyBehavior>
                        <LoginModal />
                    </Link>
                </Box>
            </Box>
        </div >
    );
};

export default Header;



