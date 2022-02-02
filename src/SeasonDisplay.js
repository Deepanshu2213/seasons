import React from 'react'
import './SeasonDisplay.css';

const getSeason=(lat,month)=>{
if(lat>0 && month>2 && month<9){
  return 'Summer'
}
if(lat<0 && month>2 && month<9){
    return 'Winter'
  }
else{
if(lat>0){
return 'Winter'
}
if(lat<0){
    return 'Summer'
}
}
}


const SeasonDisplay=(props)=>{
    console.log(props.lat);
    const date= new Date();
    const season=getSeason(props.lat,date.getMonth());
    console.log(season);
    console.log(date.getMonth());
    const Text=()=>{
      if(season==='Winter'){
       return <p>Burr its chilly</p>
      }
      else 
      return <p>Lets Hit The Beach</p>
    }
    const icon= season=== 'winter' ? 'snowflake' : 'sun';
    console.log(icon);
    return( 
        <div className={`season-display ${season}`}>
          <i className={`icon-left massive ${icon} icon`}/>
          <h3><Text/></h3>
          <i className={`icon-rigth massive ${icon} icon`}/>
        </div>

    );
};


export default SeasonDisplay;