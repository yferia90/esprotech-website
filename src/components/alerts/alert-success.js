import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AlertSuccess = ({ message }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}> 
      <Alert variant="filled" severity="success">
        { message }
      </Alert>
    </Stack>
 
  );
}

export default AlertSuccess;