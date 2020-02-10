import React from 'react'
class Color extends React.Component{

    constructor(){
      super();
      this.state={
        player1:'player1',
        player2:'player2'
      }

     
    }

    componentWillMount(){
      console.log(this.props)
      console.log("data im here from",this.props.location.state);
      this.setState({player1:this.props.location.state.p1,player2:this.props.location.state.p2})

    }

  render(){
    return(

      <div style={{display:'flex',justifyContent:'center',marginTop:50}}>

      <div>
        <h2 style={{color:'gray',marginLeft:10}}>player name</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} > </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} > </div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} > </div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} > </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} > </div>
        </div>
        <h2 style={{color:'gray',marginLeft:10}}>player name</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} > </div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} > </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} > </div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} > </div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} > </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} > </div>
        </div>
      </div>



      </div>
    );
  }
}
export default Color;