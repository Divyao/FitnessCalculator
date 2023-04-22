import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const Macros = (props) => {
    const { macroprop } = props;

    return(
        <div >
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant='h4'  gutterBottom>
            MacroCalculator
            </Typography>
            <Typography variant="h6">
              <br />
              calorie: {macroprop.calorie}
              </Typography>
              {/* <Typography variant='h5'  gutterBottom>Balanced</Typography>
              <Typography variant="h6">protein: {macroprop.balanced.protein} </Typography>
              <Typography variant="h6">fat:  {macroprop.balanced.fat} </Typography>
              <Typography variant="h6">carbs:  {macroprop.balanced.carbs} </Typography>
              <Typography variant='h5'  gutterBottom>lowfat</Typography>
              <Typography variant="h6">protein: {macroprop.lowfat.protein} </Typography>
              <Typography variant="h6">fat:  {macroprop.lowfat.fat} </Typography>
              <Typography variant="h6">carbs:  {macroprop.lowfat.carbs} </Typography>
              <Typography variant='h5'  gutterBottom>lowcarbs</Typography>
              <Typography variant="h6">protein: {macroprop.lowcarbs.protein} </Typography>
              <Typography variant="h6">fat:  {macroprop.lowcarbs.fat} </Typography>
              <Typography variant="h6">carbs:  {macroprop.lowcarbs.carbs} </Typography> */}
            </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        </div>
    

    )
}

export default Macros;