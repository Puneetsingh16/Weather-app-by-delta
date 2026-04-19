import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info} ) {
    const INIT_URL="https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let COLD_URL="https://images.unsplash.com/photo-1609336123920-4ac799c7b2a6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1572246538688-3f326dca3951?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
return (

    <div className="InfoBox">
     <div className="cardcontainer">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? 
          (<ThunderstormIcon/>) : info.temp > 15 ? (<SunnyIcon/>) : (<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>
            <p>Temperature: {info.temp}&deg;C</p>
            <p>Min Temperature: {info.temp_min}&deg;C</p>
            <p>Max Temperature: {info.temp_max}&deg;C</p>
            <p>Humidity: {info.humidity}%</p>
            <p>Weather: {info.waether}</p>
            <p>The Weather can be described as <i>{info.waether}</i> and Feels Like: {info.feelsLike}&deg;C</p>

          </div>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
);
}