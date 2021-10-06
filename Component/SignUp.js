import React,{Component} from "react";
import { Text, TextInput,EditText, View,StyleSheet,Dimensions,Button,Link,TouchableOpacity } from 'react-native';

class SignUp extends Component{ 
     
    submit =()=>{
        /* const {navigation} =this.props; */
       
        this.props.navigation.navigate('Login');
    
        }



    render(){
        return(
                

             <View style={{backgroundColor: `#f0f8ff`,flex:1}} >
              <View style={styles.container1}>
                  <View style={{flexDirection: 'row', alignSelf:"center"}}>
                  
                  <Text style={{fontSize:50 , color:'black',fontWeight:"bold"   }}>Neo</Text>
                  
                
                  <Text style={{fontSize:50 , color:'red',fontWeight:"bold"   }}>Scrum</Text>
                  
                  </View>
              </View>  
              
                  <View style={{paddingTop:30,}} >
                  <Text style={{fontSize:40 , color:'black', alignSelf:"center"   }}>Register</Text>
                  </View>
                 
                  
              <View>
                 <View >
                 <Text style={styles.Username}>UserName</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput style={{height: 40,margin: 12, borderBottomWidth: 1,paddingLeft: 10,}} placeholder="test@gmail.com"></TextInput>    
                 </View>
                 <View>
                 <Text style={styles.Username}>Password</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput style={{height: 40,margin: 12, borderBottomWidth: 1,paddingLeft: 10,}} placeholder="*****"></TextInput>    
                 </View>
                 <View>
                     <Text>Add Picture</Text>
                 </View>
                 
            </View>  
           
            <TouchableOpacity onPress={() => this.submit()}>
                    <Text> Don't Have a Account Sign up?</Text>
                    </TouchableOpacity>
             



       
        </View>    
        )
    }

}

const styles = StyleSheet.create({
    container1:{
        maxWidth: 500,
       
       justifyContent:"center",
       paddingTop:100,
    },
    Username:{
        fontSize:18,
        paddingLeft:10
    },
    
    })
export default SignUp