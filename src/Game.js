import React from 'react'
class Game extends React.Component{

  constructor(){
    super();
    this.state={
      
    }
  }

  render(){
    return(
      <div style={{marginTop:100}}>


      <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center'}}>
      <div style={{backgroundColor:'gray',height:40,width:40,marginLeft:10}} > </div>
      <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
      <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
      </div>
  
      <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
      <div style={{backgroundColor:'gray',height:40,width:40,marginLeft:10}} >  </div>
      <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
      <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
      </div>
  
      <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
      <div style={{backgroundColor:'gray',height:40,width:40,marginLeft:10}} >  </div>
      <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
      <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
      </div>
  
      </div>
    );
  }
}
export default Game;