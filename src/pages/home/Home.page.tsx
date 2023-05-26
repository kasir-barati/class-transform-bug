import { useAuth0 } from '@auth0/auth0-react';
import { Box } from '@mui/material';

export function Home() {
    const { user, isAuthenticated } = useAuth0();

    console.log('Home', user, isAuthenticated);

    return <Box>Home</Box>;
}