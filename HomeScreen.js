import React, { Component } from 'react'
import { Text, 
         View,
         StatusBar,
         ScrollView,
         Alert
         } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
        yourName: '' ,
        partnersName: '',
        NumberHolder: 0 
        }
        
    }


    input = () =>   {
        if (
            this.state.yourName !== '' &&
            this.state.partnersName !== ''
        ) {
           var randomNumber =  Math.floor(Math.random() * 100) + 1;
            this.setState(
                {
                    NumberHolder : randomNumber
                }
            )
            
        }
        else{
            Alert.alert('All fields are necessary to calculate!')
        }
    }
    
    render() {
        return (
            <ScrollView> 
                <StatusBar  
                    backgroundColor = '#487EB0'
                />
            <Form>
            <Item floatingLabel>
              <Label
              >Your Name</Label>
              <Input 
              
                 onChangeText = {yourName => this.setState({yourName})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Partner's Name</Label>
              <Input
                onChangeText = {partnersName => this.setState({partnersName})}
              />
            </Item>
            <Button 
                full
                rounded
                style = {{marginTop:40}}
                activeOpacity = { .5 } 

                onPress = {() =>{
                    this.input()
                    
                }}
                
            >
                <Text style = {{color:'#fff' , fontWeight:'bold' , fontSize:20}}>Calculate</Text>
            </Button>
          </Form>
           <View style = {{alignItems:'center' , justifyContent:'center' , marginTop:50}}>
           <Text style = {{fontWeight:'bold' , fontSize:50 , backgroundColor:'#fff'}}>
              {this.state.NumberHolder} %
            </Text>
           </View>
           
            </ScrollView>
        )
    }
}
