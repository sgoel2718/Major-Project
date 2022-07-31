import * as React from "react";
import job from "./job.png";
import "./Project.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button'
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ArticleIcon from '@mui/icons-material/Article';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WorkIcon from '@mui/icons-material/Work';

export default function Footer() {
  const [location, setlocation] = useState();

  const takeLocation = (event) => {
    setlocation(event.target.value)
  }
  return (
    <div>
      <div>
            <img src={job} className="App-logo" alt="logo" height="5" width="30" />
            <div style={{position: "absolute", top: "35%", left: "30%", transform: ("-50%", "-50"), color: 'white'}}>
              <span style={{fontFamily: 'monospace', fontSize: 30}}>Searching for a job?<br/>
              Find the best job that fits you</span>

              
              <Box
                 component="form"
                 sx={{
                   '& .MuiTextField-root': { m: 1, width: '25ch' },
                 }}
                 noValidate
                 autoComplete="off"
               >
                <div style={{background: "white", padding: 10}}>
      
                  <div style={{display: "inline-block"}}>
                <TextField id="filled-search" label="Search field" type="search"/>
                 </div>
      
      
                <div style={{display: "inline-block", width: 210}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={location}
                      label="Location"
                      onChange={takeLocation}
                    >
                      <MenuItem value={'Kolkata'}>Kolkata</MenuItem>
                      <MenuItem value={'Delhi'}>Delhi</MenuItem>
                      <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
                      <MenuItem value={'Lucknow'}>Lucknow</MenuItem>
                      <MenuItem value={'Jaipur'}>Jaipur</MenuItem>
                    </Select>
                  </FormControl>
              </div>
      
              <div style={{display: "inline-block", width: 210}}>
                <div>
                 <Button variant="contained">Search</Button>
                </div>
              </div>
      
              </div>
              </Box>
              
              
            </div>
      </div>
      <div style={{margin: 50}}>
        {/* Job postings */}
        <Card sx={{ maxWidth: 360 }}>
             <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                 Software Development Engineer
               </Typography>
               <Typography variant="body2" color="text.secondary">
                <LocationCityIcon/>Impact IT Solutions 
                <LocationOnIcon/>Kolkata
                <br/>
                <CurrencyRupeeIcon/>Not disclosed
                <WorkIcon/>1-2 yrs
                <br/>
                <ArticleIcon/>React Js, PHP, Python
               </Typography>
             </CardContent>
             <CardActions>
               <Button variant="contained">Apply</Button>
             </CardActions>
        </Card>
      </div>
    </div>
  );
}
