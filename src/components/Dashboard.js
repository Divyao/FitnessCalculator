import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const BMI =() => {
  
  return (
    <div style={{margin: '25%'}}>
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant='h3'  gutterBottom>
          A Simple MUI Card
        </Typography>
        <Typography variant="h4" component="div">
         Heading
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          describes the heading
        </Typography>
        <Typography variant="body1">
          Card content
          <br />
          {'"describes the content"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Card Button</Button>
      </CardActions>
    </Card>
    </div>
    
  );
}




export default BMI