import { Box } from '@mui/material';
import { BACKEND_API_PREFIX } from 'backend/src/test';
import './App.css';

function App() {
    return <Box>{BACKEND_API_PREFIX}</Box>;
}

export default App;