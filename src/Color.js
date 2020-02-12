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
  //  console.log(val);
if(val===1){
        if(this.state.p1color===data){
          return("O");
        }}

        if(val===2){
          if(this.state.p2color===data){
            return("X");
          }}
     
    }

    renderbutton(){
      if(this.state.p1color!==null&&this.state.p2color!==null){
        console.log(this.state.p1color);
        console.log(this.state.p2color);
        return(
<button type="button" class="btn btn-info active" onClick={()=>this.gogame()}>Go Aheade</button>
        )
      }else {
        return(<button type="button" class="btn btn-info"  disabled>Go Aheade</button>

        )
      }

    }

    gogame(){
      this.props.history.push("/game",{p1c:this.state.p1color,p2c:this.state.p2color,p1n:this.state.player1,p2n:this.state.player2});
    }



  render(){
    return(

      <div style={{display:'flex',justifyContent:'center',marginTop:50}}>

      <div>
        <h2 style={{color:'gray',marginLeft:10 ,fontFamily:'Bai Jamjuree'}}>{this.state.player1.toUpperCase()}</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("red",1)} ><h4 style={{textAlign:'center'}}>{this.xoon("red",1)}</h4> </div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("blue",1)} ><h4 style={{textAlign:'center'}}>{this.xoon("blue",1)}</h4> </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("green",1)}><h4 style={{textAlign:'center'}}>{this.xoon("green",1)}</h4> </div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("gray",1)}> <h4 style={{textAlign:'center'}}>{this.xoon("gray",1)}</h4></div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("yellow",1)}><h4 style={{textAlign:'center'}}>{this.xoon("yellow",1)}</h4> </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("black",1)}> <h4 style={{textAlign:'center',color:'white'}}>{this.xoon("black",1)}</h4>  </div>
        </div>
        <h2 style={{color:'gray',marginLeft:10 ,fontFamily:'Bai Jamjuree'}}>{this.state.player2.toUpperCase()}</h2>
        <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{backgroundColor:'red',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("red")} > <h4 style={{textAlign:'center'}}>{this.xoon("red")}</h4></div>
        <div style={{backgroundColor:'blue',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("blue")} > <h4 style={{textAlign:'center'}}>{this.xoon("blue")}</h4> </div>

        <div style={{backgroundColor:'green',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("green")}>  <h4 style={{textAlign:'center'}}>{this.xoon("green")}</h4></div>

        <div style={{backgroundColor:'gray',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("gray")}> <h4 style={{textAlign:'center'}}>{this.xoon("gray")}</h4> </div>


        <div style={{backgroundColor:'yellow',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("yellow")}> <h4 style={{textAlign:'center'}}>{this.xoon("yellow")}</h4> </div>

        <div style={{backgroundColor:'black',height:40,width:40, marginLeft:10}} onClick={()=>this.oncolorcall("black")}>  <h4 style={{textAlign:'center',color:'white'}}>{this.xoon("black")}</h4></div>
        </div>
        <div style={{ display:'flex',justifyContent:'flex-end',marginTop:10}}>
        {this.renderbutton()}
        </div>
      </div>


      </div>
    );
  }
}
export default Color;