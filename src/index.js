import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css";
import Loaders from './Loader'
/*const App= ()=>{
  
    window.navigator.geolocation.getCurrentPosition(
     (position)=>
       console.log(position),
       err=>console.log(err)
     
    )
    
 };*/
 class App extends React.Component{
    /*constructor(props){
       super(props);
       this.state={lat: null, errormessage: ''};//default state
      
        //function defined by react.component class
        //ComponentDidUpdate() auttomaticaly run after set state updates or something updates then after it render is called
        //ComponentDidMount() it gets called first time default rendering
        } OR   */
        state ={lat: null, errorMessage: ""}// here work is done by babel writing whole above
        componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
           (position)=>this.setState({lat: position.coords.latitude})//update state
             ,
             err=>{  console.log(err);
             this.setState({errorMessage: err.message})
             }
           
           ) ;
       }
       componentDidUpdate(){
         window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat: position.coords.latitude})//update state
              ,
              err=>{  console.log(err);
              this.setState({errorMessage: err.message})
              }
            
            ) ;
       }
    renderContent(){
      if(this.state.errorMessage && !this.state.lat){
         return <div>Error: {this.state.errorMessage}</div>
      }
      if(!this.state.errormessage && this.state.lat){
         return <SeasonDisplay lat={this.state.lat} err={this.state.errormessage} />
      }
      else
      return <div><Loaders message="Please accept the location request"/></div>
    }

    render(){//to return some jsx
     /*if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
     }
     if(!this.state.errormessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat} err={this.state.errormessage} />
     }
     else
     return <div><Loaders message="Please accept the location request"/></div>// children also rerender if update is there*/
    return (
    <div className="border red">{this.renderContent()}</div>
    );
    }
 }

ReactDOM.render(
   <App/>,document.querySelector('#roots')

);

