import React from 'react'
class Game extends React.Component{

  constructor(){
    super();
    this.state={
    color:["#F1F3EF","#F1F3EF","#F1F3EF","#F1F3EF", "#F1F3EF", "#F1F3EF", "#F1F3EF" ,"#F1F3EF", "#F1F3EF","#F1F3EF"],
    p1:[],
    p2:[],
    flag:0,
    occblock:[],
    winner:null
    }
  }

  componentWillMount(){
    console.log(this.props.location.state);
  }

  onblockclick(blockno){
    if(this.state.winner!==null){
      alert("kya karlog abhi jeet gaya wo...")
      return;
    }
    var n = this.state.occblock.includes(blockno);
    if(n===false){
      const array=this.state.occblock;
      array.push(blockno);
      this.setState({occblock:array},()=>{console.log("Occupied array ==", this.state.occblock)});
      
    }else{
      console.log("block exist")
      return;
    }
    if(this.state.flag===0){
      const newIds = this.state.color.slice() //copy the array
      newIds[blockno] = this.props.location.state.p1c //execute the manipulations
      this.setState({color: newIds},()=>console.log("new col array",this.state.color)) //set the new state      this.setState({color[blockno]:'red'})
      this.setState({flag:1})
      var data=this.state.p1;
      data.push(blockno);
      this.setState({p1:data},()=>{console.log("p1 array =>>",this.state.p1)
      this.winner();
    },)
    }else {
      //player x
      const newIds1 = this.state.color.slice() //copy the array
      newIds1[blockno] = this.props.location.state.p2c //execute the manipulations
      this.setState({color: newIds1},()=>console.log("new col array",this.state.color)) //set the new state      this.setState({color[blockno]:'red'})
      this.setState({flag:0})
      var data=this.state.p2;
      data.push(blockno);
      this.setState({p2:data},()=>{console.log("p2 array =>>",this.state.p2)
      this.winner();
    })
      }



  }

  winner(){
      //check for player 1
      if(this.state.p1.includes(1)&&this.state.p1.includes(3)&&this.state.p1.includes(2)){
      this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
      }else if(this.state.p1.includes(1)&&this.state.p1.includes(5)&&this.state.p1.includes(9)){
        this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
      }else if(this.state.p1.includes(3)&&this.state.p1.includes(5)&&this.state.p1.includes(7)){
        this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
      }else if(this.state.p1.includes(4)&&this.state.p1.includes(5)&&this.state.p1.includes(6)){
        this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
      }else if(this.state.p1.includes(7)&&this.state.p1.includes(8)&&this.state.p1.includes(9)){
        this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
      }else if(this.state.p1.includes(1)&&this.state.p1.includes(4)&&this.state.p1.includes(7)){
        this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
      }else if(this.state.p1.includes(2)&&this.state.p1.includes(5)&&this.state.p1.includes(8)){
        this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
       }else if(this.state.p1.includes(3)&&this.state.p1.includes(6)&&this.state.p1.includes(9)){
          this.setState({winner:this.props.location.state.p1n},()=>console.log("winner is ",this.props.location.state.p1n))
        }else{
          console.log("NO winner")
        }


        if(this.state.p2.includes(1)&&this.state.p2.includes(3)&&this.state.p2.includes(2)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }else if(this.state.p2.includes(1)&&this.state.p2.includes(5)&&this.state.p2.includes(9)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }else if(this.state.p2.includes(3)&&this.state.p2.includes(5)&&this.state.p2.includes(7)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }else if(this.state.p2.includes(4)&&this.state.p2.includes(5)&&this.state.p2.includes(6)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }else if(this.state.p2.includes(7)&&this.state.p2.includes(8)&&this.state.p2.includes(9)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }else if(this.state.p2.includes(1)&&this.state.p2.includes(4)&&this.state.p2.includes(7)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }else if(this.state.p2.includes(2)&&this.state.p2.includes(5)&&this.state.p2.includes(8)){
          this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
        }
          else if(this.state.p2.includes(3)&&this.state.p2.includes(6)&&this.state.p2.includes(9)){
            this.setState({winner:this.props.location.state.p2n},()=>console.log("winner is ",this.props.location.state.p2n))
          }else{
            console.log("no winner yet")
          }
  




  //   console.log("in winner")
  // var n=this.state.p1.includes(1,2)
  // console.log(n)
  // if(n){
  //   alert("winner");
  // }
  
}
  
winnername(){

  var name1=this.props.location.state.p1n;
  var name2=this.props.location.state.p2n;


  if(this.state.winner!==null){
  if(name1.toLowerCase()==="lavanya"){
    return(<h4 style={{textAlign:'center'}}>Winner:"Lavanya" , You gonna win no matter what, coz its my code xD</h4>)
  }
  if(name2.toLowerCase()==="lavanya"){
    return(<h4 style={{textAlign:'center'}}>Winner:"Lavanya" , You gonna win no matter what, coz its my code xD</h4>)
  }
  }

  if(this.state.winner!==null){
  return(<h4 style={{textAlign:'center'}}>Winner:{this.state.winner}</h4>)
  }

  if(this.state.occblock.length===9){

    if(name1.toLowerCase()==="lavanya"){
      return(<h4 style={{textAlign:'center'}}>Winner:"Lavanya" , You gonna win no matter what, coz its my code xD</h4>)
    }else{
      return(<h4 style={{textAlign:'center'}}>Its TIE </h4>)

    }
  }

}

  changecolor(){
    return("#F1F3EF");
  }

  render(){
    return(
      <div style={{marginTop:100}}>
      <div  style={{display:"flex",flexDirection: 'column',alignItems:'center',justifyContent:'center'}}>
      <h5 style={{color:this.props.location.state.p1c,marginLeft:10 ,fontFamily:'Bai Jamjuree'}}>{this.props.location.state.p1n.toUpperCase()}:{this.props.location.state.p1c.toUpperCase()} </h5>
      <h5 style={{color:this.props.location.state.p2c,marginLeft:10 ,fontFamily:'Bai Jamjuree'}}>{this.props.location.state.p2n.toUpperCase()}:{this.props.location.state.p2c.toUpperCase()} </h5>
      </div>


      <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
      <div style={{backgroundColor:this.state.color[1],height:40,width:40,marginLeft:10}} onClick={()=>this.onblockclick(1)}> </div>
      <div style={{backgroundColor:this.state.color[2],height:40,width:40, marginLeft:10}}  onClick={()=>this.onblockclick(2)}> </div>
      <div style={{backgroundColor:this.state.color[3],height:40,width:40, marginLeft:10}}  onClick={()=>this.onblockclick(3)}> </div>
      </div>
  
      <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
      <div style={{backgroundColor:this.state.color[4],height:40,width:40,marginLeft:10}}  onClick={()=>this.onblockclick(4)}>   </div>
      <div style={{backgroundColor:this.state.color[5],height:40,width:40, marginLeft:10}}  onClick={()=>this.onblockclick(5)}> </div>
      <div style={{backgroundColor:this.state.color[6],height:40,width:40, marginLeft:10}}  onClick={()=>this.onblockclick(6)}> </div>
      </div>
  
      <div style={{display:"flex",flexDirection: 'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
      <div style={{backgroundColor:this.state.color[7],height:40,width:40,marginLeft:10}}  onClick={()=>this.onblockclick(7)}> </div>
      <div style={{backgroundColor:this.state.color[8],height:40,width:40, marginLeft:10}}  onClick={()=>this.onblockclick(8)}> </div>
      <div style={{backgroundColor:this.state.color[9],height:40,width:40, marginLeft:10}}  onClick={()=>this.onblockclick(9)}> </div>
      </div>
      {  
        this.winnername()
      }
      </div>
    );
  }
}
export default Game;