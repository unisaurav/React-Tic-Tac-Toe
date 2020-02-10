import React from 'react'
class Color extends React.Component{

    constructor(){
      super();
      this.state={
        player1:'player1',
        player2:'player2',
        p1color:null,
        p2color:null
      }

     
    }

    componentWillMount(){
      console.log(this.props)
      console.log("data im here from",this.props.location.state);
      this.setState({player1:this.props.location.state.p1,player2:this.props.location.state.p2})

    }

    oncolorcall(color,val=2){
      if(val==1){
        this.setState({p1color:color})
      }else{
        this.setState({p2color:color})
      }

      console.log(this.state.p1color);
      console.log(this.state.p2color);

      
    }

    xoon(data){
    }
  render(){
    return(

      <div style={{display:'flex',justifyContent:'center',marginTop:50}}>

      <div>
        <h2 style={{color:'gray',marginLeft:10}}>{this.state.player1}</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("red",1)} >{this.xoon("red")} </div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("blue")} > </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("green")}> </div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("gray")}> </div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("yellow")}> </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("black")}> </div>
        </div>
        <h2 style={{color:'gray',marginLeft:10}}>{this.state.player2}</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("red")} > </div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("blue")} > </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("green")}> </div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("gray")}> </div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("yellow")}> </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("black")}> </div>
        </div>
      </div>



      </div>
    );
  }
}
export default Color;