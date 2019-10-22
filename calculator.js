import React, { Component } from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';

export default class Calculator extends Component
{
  constructor()
  {
    super();
    this.state={
      resultText:"",
      calculation:""
    }
     this.symb=["Del","+","*","/","-"];

  }
  calculateResult()
  {
    const text= this.state.resultText;
    this.setState({calculation:eval(text)})
  }
  buttonPress(text)
  {
    if(text == "=")
    {
      return this.validate  && this.calculateResult();
    }
    this.setState({resultText:this.state.resultText+text})
  }
  validate()
  {
    const text=this.state.resultText;
    switch(text.slice(-1))
    {
      case "+":
      case "*":
      case "/":
      case "-":
          return false;
    }
    return true;
  }
  operator(operation)
  {
    switch(operation)
    {
      case 'Del':
            var text=this.state.resultText.split('');
            text.pop();
           this.setState({resultText:text.join('')});
           break;
      case '+':
      case '*':
      case '/':
      case '-':
        var lastChar=this.state.resultText.split("").pop();
        if(this.symb.indexOf(lastChar)>0) return;
        this.setState({resultText:this.state.resultText+operation});
    }
  }
  render(){    
let rows=[];
      let nums=[[7,8,9],[4,5,6],[1,2,3],[0,".","="]];
    for(let i=0;i<4;i++)
    {
      let row=[];
      for(let j=0;j<3;j++)
      {
        row.push(<TouchableOpacity onPress={()=>this.buttonPress(nums[i][j])}style={{backgroundColor:"grey",width:85,height:86,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:30,fontWeight:"bold"}}>{nums[i][j]}</Text></TouchableOpacity>)
      }
      rows.push(<View style={styles.rows}>{row}</View>)
    }
    let opts=[];
     this.symb=["Del","+","*","/","-"];
    for(let i=0;i<5;i++)
    {
       opts.push(<TouchableOpacity onPress={()=>this.operator(this.symb[i])} style={{backgroundColor:"grey",width:85,height:68,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:30,fontWeight:"bold"}}>{this.symb[i]}</Text></TouchableOpacity>)
    }
    return(
      <View style={styles.container}>
        <View style={styles.result}>
            <Text style={{fontSize:30}}>{this.state.resultText}</Text>
          </View>
        <View style={styles.calculation}>
          <Text style={{fontSize:20}}>{this.state.calculation}</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.number}>
              {rows}
            
            
            
          </View>
          
<View style={styles.operations}>
          {opts}
          </View>
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  rows:{
    flex:1,
    justifyContent:"space-around",
    flexDirection:"row",
    alignItems:"center",
    
    fontWeight:"bold",
    fontSize:20
  },
  result:{
    flex:2,
    backgroundColor:"white",
    flexDirection:"row-reverse"
  },
  calculation:{
    flex:1,
    border:1,
    backgroundColor:"lightgrey",
    alignItems:'center',
    flexDirection:"row-reverse",
    color:"lightgrey"
  },
  button:{
    flex:7,
    flexDirection:"row",
    backgroundColor:"grey"
  },
  number:{
    flex:3,
    backgroundColor:"grey"
},
operations:{
  flex:1,
  justifyContent:"space-around",
  backgroundColor:"darkgrey"
}
})