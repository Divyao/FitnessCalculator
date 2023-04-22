import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import axios  from 'axios';




const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 500,
    color: theme.palette.text.primary,
  }));

 
const RegisterForm = () => {
    const [name, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event) {
        event.preventDefault();
            const userObject = {
                name: name,
                email: email,
                password: password,
    
    
            };
            // axios.post('http://localhost:3001/api/v1/users', userObject)
            //     .then((res) => {
            //         console.log(res.data)
            //     }).catch((error) => {
            //         console.log(error)
            //     });
                const options = {
                    method: 'POST',
                    url: 'https://capitall_fitness.p.rapidapi.com/registration',
                    headers: {
                      'content-type': 'application/JSON',
                      'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
                      'X-RapidAPI-Host': 'capitall_fitness.p.rapidapi.com'
                    },
                    data: userObject
                  };
                  axios.request(options).then(function (response) {
                    console.log(response.data);
                }).catch(function (error) {
                    console.error(error);
                });
               
        //console.log(firstName, lastName, email, dateOfBirth, password) 
    }
 
    return (
        <React.Fragment>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                     <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }} >
                        <StyledPaper  
                        sx={{
                            my: 12.5,
                            mx: 'auto',
                            p: 2,
                            
                        }}
                        >
            <h2 align ="center">Register Form</h2>
            <div>
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label=" Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={name}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            </div>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
                        </StyledPaper>
                    </Box>
                </Grid>
            </Grid>


        </React.Fragment>
    )
}
 
export default RegisterForm;