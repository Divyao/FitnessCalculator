import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const BMI = (props) => {
    const { bmiprop } = props;

    return(
        <div >
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant='h4'  gutterBottom>
            BMI
            </Typography>
            <Typography variant="h6">
              <br />
              bmi: {bmiprop.bmi}
              </Typography>
              <Typography variant="h6">health: {bmiprop.health} </Typography>
              <Typography variant="h6">healthy_bmi_range:  {bmiprop['healthy_bmi_range']} </Typography>
            </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        </div>
    

    )
}

export default BMI;