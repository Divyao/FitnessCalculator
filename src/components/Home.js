
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import  { useState, useEffect } from 'react';
import axios  from 'axios';
import Typography from '@mui/material/Typography';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Bodyfat from './Bodyfat';
import Idealweight from './Idealweight';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import BMI from './BMI';
import Macros from './macros';
import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const genderList = [
  {
    value: 'male',
    label: 'male',
  },
  {
    value: 'female',
    label: 'female',
  },

]

const goalsList = [
  {
    value: 'maintain weight',
    label: 'maintain',
  },
  {
    value: 'Mild weight loss',
    label: 'mildlose',
  },
  {
    value: 'Weight loss',
    label: 'weightlose',
  },
  {
    value: 'Extreme weight loss',
    label: 'extremelose',
  },
  {
    value: 'Mild weight gain',
    label: 'mildgain',
  },
  {
    value: 'Weight gain',
    label: 'weightgain',
  },
  {
    value: 'Extreme weight gain',
    label: 'extremegain',
  }
];

const activelyLevelList = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
  {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  }
  ]

 const InputDetails = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [neck, setNeck] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');
    const [activity, setActivity] = useState('');
    const [goals, setGoals] = useState('');
    const [details, setDetails] = useState({});
    const [bodyfat, setBodyfat] = useState('');
    const [idealWeight, setIdealWeight] = useState('');
    const [bmiValue ,setBMIValue] = useState('');
    const [macroValue ,setMacroValue] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    // const [showBodyFat, setShowBodyFat] = useState(false);
    // const [showIdealWeight, setShowIdealWeight] = useState(false);

    // const onHandleChange = (e) => {

    //   if ( age > 80 ) {
    //     alert= 'Please Enter Employee Name'
      
    //   }
    //   setAge(e.target.value)



    // }

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    // const  onHandleIdealWeight = () => {

    //     setShowIdealWeight(true)
    //     setShowBodyFat(false);

    //     axios.request( idealWtreq).then(function (response) {
    //         console.log(response.data);
    //         setIdealWeight(response.data.data)
    //       }).catch(function (error) {
    //         console.error(error);
    //       });
    
    //       setAge('');
    //       setHeight('');
    //       setWeight('');

    // }
    const handleSubmit = () => {
    //   const newDetails = {
    //     age: age,
    //     height: height,
    //     weight: weight,
    //     gender: gender,
    //     neck: neck,
    //     waist: waist,
    //     hip: hip
    //   };
    //   setDetails({...details, newDetails});
    //  // console.log(options);
    //  setShowBodyFat(true);
    //  setShowIdealWeight(false)

    //  setShowIdealWeight(true)
    //     setShowBodyFat(false);

    setShowDetails(true);

    axios.request(idealWtreq).then(function (response) {
           // console.log(response.data);
            setIdealWeight(response.data.data)
          }).catch(function (error) {
            console.error(error);
    });

    axios.request(bmi).then(function (response) {
        setBMIValue(response.data.data)
    }).catch(function (error) {
        console.error(error);
    });

    axios.request(macroNutri).then(function (response) {
      console.log(response.data);
      console.log(response.data.data.balanced.protein);
      setMacroValue(response.data.data)
    }).catch(function (error) {
      console.error(error);
    });

    axios.request(options).then(function (response) {
        setBodyfat(response.data.data)
    }).catch(function (error) {
        console.error(error);
    });

      setAge('');
      setHeight('');
      setWeight('');
      setGender('');
      setGoals('');
      setActivity('');
      setWaist('');
      setHip('');
      setNeck('');
      
    };
    const idealWtreq = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
        params: {gender: gender, height: height},
        headers: {
          'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };

    const macroNutri = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
        params: {
          age: age,
          gender: gender,
          height: height,
          weight: weight,
          activitylevel: activity,
          goal: goals
        },
        headers: {
          'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
  };
    const bmi = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bmi',
        params: {age: age, weight: weight, height: height},
        headers: {
          'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };
    const options = {
        method: 'GET',
        url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
        params: {age: age,
            height: height,
            weight: weight,
            gender: gender,
            neck: neck,
            waist: waist,
            hip: hip},
        headers: {
          'X-RapidAPI-Key': '4a0b82339bmshb4ed0c2cc0b76ebp1156aajsn3acd1ddc6749',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };

    

      useEffect (() => {

      },[])
      

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '150vh' }} >
        <div align="center">
       <form onSubmit={onSubmitHandler}>
       <br/>
       <h1>Enter Details</h1>
         <TextField  label="Age" value={age} onChange=  { (e) => setAge(e.target.value) } />
         {/* <TextField label="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
         <TextField
          id="outlined-select-activity"
          select
          label="gender"
          defaultValue="5"
          value={gender} 
          onChange={(e) => setGender(e.target.value)}
        >
          {genderList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

         <TextField  label="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
         <br/>
         <br/>
        <TextField  label="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <br/>
         <br/>
         <TextField label="neck" value={neck} onChange={(e) => setNeck(e.target.value)} />
         <TextField  label="waist" value={waist} onChange={(e) => setWaist(e.target.value)} />
         <TextField  label="hip" value={hip} onChange={(e) => setHip(e.target.value)} />
         <br/>
         <br/>
         <TextField
          id="outlined-select-activity"
          select
          label="Activity Level"
          defaultValue="5"
          value={activity} 
          onChange={(e) => setActivity(e.target.value)}
        >
          {activelyLevelList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* <TextField label="Activity Level" value={activity} onChange={(e) => setActivity(e.target.value)} /> */}
        {/* <TextField label="goal" value={goals} onChange={(e) => setGoals(e.target.value)} /> */}

        <TextField
          id="outlined-select-goal"
          select
          label="goal"
          defaultValue="extremelose"
          value={goals} 
          onChange={(e) => setGoals(e.target.value)}
        >
          {goalsList.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br/>
         <br/>
         <Button variant="contained" color="primary" onClick={handleSubmit}>
           Submit
         </Button>
         <br/>
         <br/>
         {/* <Button variant="contained" color="primary" onClick={onHandleIdealWeight}>
           IdealWeight
         </Button> */}
       </form>
       </div>
       {showDetails &&
    <Box>
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Bodyfat bodyfatprop={bodyfat}/>
        </Grid>
        <Grid item xs={6}>
          <Idealweight idealwtprop={idealWeight}/>
        </Grid>
        <Grid item xs={6}>
        <BMI bmiprop ={bmiValue}/>
        </Grid>
        <Grid item xs={6}>
        <Macros macroprop ={macroValue}/>
        </Grid>
      </Grid>
    </Box>
 }
    </Box>
      </Container>
    </React.Fragment>
  );
}
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { FormControl, FormLabel } from '@mui/material';


// const InputDetails = () => {
//     return (
//         <div>
//             <FormControl>
//             <FormLabel>Please Enter the Details</FormLabel>
//             <FormLabel>Age</FormLabel>
//             <TextField></TextField>
//             <Button>Submit</Button>
//             </FormControl>
//         </div>
//     )
// }

 export default InputDetails;

// import React, { useState } from 'react';
// import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const DetailsForm = () => {
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [details, setDetails] = useState([]);

//   const handleAgeChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleHeightChange = (event) => {
//     setHeight(event.target.value);
//   };

//   const handleWeightChange = (event) => {
//     setWeight(event.target.value);
//   };

//   const handleSave = () => {
//     const newDetails = {
//       age: age,
//       height: height,
//       weight: weight,
//     };
//     setDetails([...details, newDetails]);
//     setAge('');
//     setHeight('');
//     setWeight('');
//   };

//   return (
//     <div>
//       <form>
//         <TextField label="Age" value={age} onChange={handleAgeChange} />
//         <TextField label="Height" value={height} onChange={handleHeightChange} />
//         <TextField label="Weight" value={weight} onChange={handleWeightChange} />
//         <Button variant="contained" color="primary" onClick={handleSave}>
//           Save
//         </Button>
//       </form>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Age</TableCell>
//               <TableCell>Height</TableCell>
//               <TableCell>Weight</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {details.map((detail, index) => (
//               <TableRow key={index}>
//                 <TableCell>{detail.age}</TableCell>
//                 <TableCell>{detail.height}</TableCell>
//                 <TableCell>{detail.weight}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default DetailsForm;
