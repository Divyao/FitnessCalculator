import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const Bodyfat = (props) => {
    const { bodyfatprop } = props;

    return(
        <div >
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant='h4'  gutterBottom>
            Body Fat percentage
            </Typography>
            <Typography variant="h6">
              <br />
              Body Fat (U.S. Navy Method): {bodyfatprop['Body Fat (U.S. Navy Method)']}
              </Typography>
              <Typography variant="h6">Body Fat Category: {bodyfatprop['Body Fat Category']} </Typography>
              <Typography variant="h6">Body Fat Mass:  {bodyfatprop['Body Fat Mass']} </Typography>
              <Typography variant="h6">Lean Body Mass:  {bodyfatprop['Lean Body Mass']} </Typography>
              <Typography variant="h6">Body Fat (BMI method):  {bodyfatprop['Body Fat (BMI method)']} </Typography>
            </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        </div>
    

    )
}

export default Bodyfat;