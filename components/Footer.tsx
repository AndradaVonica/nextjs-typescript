
import Link from "next/link";
import LoginModal from '../components/LoginModal';
import { Box, Typography, Button } from '@mui/material'

const Header = () => {

    return (
        <div style={{ display: "flex", backgroundColor: "white", height: "80px", justifyContent: "space-around", alignItems: "center", borderTop: "solid grey 1px" }} >
            <Box display="flex"  >
                <Link href="/" passHref legacyBehavior>
                    <Typography variant="h4" component="h1" color="textSecondary" mr={2} >
                        MindPair
                    </Typography>
                </Link>
            </Box>
        </div >
    );
};

export default Header;



