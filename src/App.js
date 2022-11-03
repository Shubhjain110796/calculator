import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { borderColor } from '@mui/system';
import { red } from '@mui/material/colors';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
      
    •
  </Box>
);


function App() {
   const [result,setResult] = useState('');
 
   const clear = () =>{
    setResult('');
  }

  const handleClick = (e) => {
       setResult(result.concat(e.target.value))
  }
  const calculate =() =>{
    setResult(eval(result).toString());
  }
  const back = () =>{
    setResult(result.slice(0,-1));
  }

  return (
<div className='cal'>
    <Card sx={{ minWidth: 250 }} style={{border: 2, borderColor:'black',background:'#333'}}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      <input type='text' placeholder='0' id='answer' className='txt' value={result}></input>
      <input type='button' value='1' onClick={handleClick}  className='btn'></input>
      <input type='button' value='2' className='btn'onClick={handleClick}></input>
      <input type='button' value='3'className='btn' onClick={handleClick}></input>
      <input type='button' value='4'className='btn' onClick={handleClick}></input>
      <input type='button' value='5'className='btn' onClick={handleClick}/>
      <input type='button' value='6'className='btn' onClick={handleClick}/>
      <input type='button' value='7'className='btn' onClick={handleClick}></input>
      <input type='button' value='8'className='btn' onClick={handleClick}></input>
      <input type='button' value='9'className='btn' onClick={handleClick}></input>
      <input type='button' value='0'className='btn' onClick={handleClick}></input>
      <input type='button' value='.'className='btn' onClick={handleClick}></input>
      <input type='button' value='+'className='btn' onClick={handleClick}></input>
      <input type='button' value='-'className='btn' onClick={handleClick}></input>
      <input type='button' value='*'className='btn' onClick={handleClick}></input>
      <input type='button' value='/'className='btn' onClick={handleClick}></input>
      <input type='button' value='%'className='btn' onClick={handleClick}></input>
  
  
      {/* <Typography variant="h5" component="div"> */}
       
      {/* </Typography> */}
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      

      </Typography>
      <Typography variant="body2">
      
        <br />
        </Typography>
        <input type='button' value='C' onClick={clear} className='btn1'></input>
      <input type='button' value='<'className='btn1' onClick={back}></input>
      <input type='button' value='=' onClick={calculate} className='btn1'></input>

            </Typography>
    </CardContent>
    <CardActions>
      
    </CardActions>
  </Card>     
    </div>
  );
}

export default App;
