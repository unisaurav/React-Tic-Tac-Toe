import React from 'react'
class Color extends React.Component{

    constructor(){
      super();
      this.state={
        player1:'player1',
        player2:'player2',
        p1color:null,
        p2color:null,
      }

     
    }

    componentWillMount(){
      console.log(this.props)
      console.log("data im here from",this.props.location.state);
      this.setState({player1:this.props.location.state.p1,player2:this.props.location.state.p2})
    }

    oncolorcall(color,val=2){
      if(val===1){
        this.setState({p1color:color},()=> console.log("hrashit wala log",this.state.p1color))
        console.log("here then")

      }else{
        this.setState({p2color:color})
      }

      console.log(this.state.p1color);
      console.log(this.state.p2color);
    }



    xoon(data,val=2){
   console.log(val);
if(val===1){
        if(this.state.p1color===data){
          return("O");
        }}

        if(val===2){
          if(this.state.p2color===data){
            return("X");
          }}
     
    }



  render(){
    return(

      <div style={{display:'flex',justifyContent:'center',marginTop:50}}>

      <div>
        <h2 style={{color:'gray',marginLeft:10}}>{this.state.player1}</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("red",1)} ><h4>{this.xoon("red",1)}</h4> </div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("blue",1)} ><h4>{this.xoon("blue",1)}</h4> </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("green",1)}><h4>{this.xoon("green",1)}</h4> </div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("gray",1)}> <h4>{this.xoon("gray",1)}</h4></div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("yellow",1)}><h4>{this.xoon("yellow",1)}</h4> </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("black",1)}> <h4>{this.xoon("black",1)}</h4>  </div>
        </div>
        <h2 style={{color:'gray',marginLeft:10}}>{this.state.player2}</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("red")} > <h4>{this.xoon("red")}</h4></div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("blue")} > <h4>{this.xoon("blue")}</h4> </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("green")}>  <h4>{this.xoon("green")}</h4></div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("gray")}> <h4>{this.xoon("gray")}</h4> </div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("yellow")}> <h4>{this.xoon("yellow")}</h4> </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("black")}>  <h4>{this.xoon("black")}</h4></div>
        </div>
      </div>



      </div>
    );
  }
}
export default Color;