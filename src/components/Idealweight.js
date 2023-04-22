import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const Idealweight = (props) => {
    const { idealwtprop } = props;

    return(
        <div>
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant='h4'  gutterBottom>
            Ideal Weight
            </Typography>
            <Typography variant="h6">
              <br />
              Hamwi: {idealwtprop.Hamwi}
              </Typography>
              <Typography variant="h6">Devine: {idealwtprop.Devine} </Typography>
              <Typography variant="h6">Miller:  {idealwtprop.Miller} </Typography>
              <Typography variant="h6">Robinson:  {idealwtprop.Robinson} </Typography>
            </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        </div>
    

    )
}

export default Idealweight;