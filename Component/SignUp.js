import React, {Component} from 'react';
import {
  Text,
  TextInput,
  EditText,
  View,
  StyleSheet,
  Dimensions,
  Button,
  Link,
  TouchableOpacity,
} from 'react-native';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
class Login extends Component {
  /* Constructor For State*/
  constructor() {
    super();
    this.state = {
      checkEmail: '',
      checkPassword: '',
    };
  }
  onEmailChange(e) {
    let regx =
      /^[a-zA-Z]{1,}?([a-zA-Z1-9]{1,})?([_])?([.])?([a-zA-Z1-9]{1,})?([.])?([a-zA-Z1-9]{1,})[@]?([a-z]{1,})?([.])?([a-z]{1,})?([.])?([a-z]{1,})$/;
    this.setState({checkEmail: ''});
    if (e == '') {
      this.setState({checkEmail: 'Please enter Email'});
    } else if (!regx.test(e)) {
      this.setState({checkEmail: 'Please Enter A valid Email'});
    } else {
      this.setState({checkEmail: ''});
    }
  }

  onPasswordCheck(f) {
    let reggexp = /^[a-zA-Z0-9]{8,12}$/;
    this.setState({checkPassword: ''});
    if (f == '') {
      this.setState({checkPassword: 'Please enter Password'});
    } else if (!reggexp.test(f)) {
      this.setState({checkPassword: 'Alphanumeric Between 8 to 12 character'});
    } else {
      this.setState({checkPassword: ''});
    }
  }
  checkValidation() {
    let state1 = onEmailChange();
    let state2 = onPasswordCheck();
  }
  submit = () => {
    /* const {navigation} =this.props; */
    console.log('this.props.navigation', this.props.navigation);
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={{backgroundColor: '#f0f8ff', flex: 1}}>
        <View style={styles.container1}>
        <View style={{flexDirection: 'row', alignSelf:"center"}}>
                  <Text style={{fontSize:50 , color:'black',fontWeight:"bold"   }}>Neo</Text>
                  <Text style={{fontSize:50 , color:'red',fontWeight:"bold"   }}>Scrum</Text>
                  </View>
        </View>

        <View style={{paddingTop: 10, paddingBottom:40}}>
          <Text style={{fontSize: 35, color: 'black',  alignSelf: 'center', fontWeight:'600'}}>
            Register
          </Text>
        </View>

        {/* Username */}
        <View>
          <View>
            <Text style={{fontWeight:'700', fontSize:18}}>UserName</Text>
          </View>
          <View style={{width: Dimensions.get('window').width}}>
            <TextInput style={{height: 40,margin: 12, borderBottomWidth: 2,paddingLeft: 10, borderColor:'black'}}
              onChangeText={e => {this.onEmailChange(e);}}
              style={styles.inputField}
              placeholder="test@gmail.com"
            />
            <Text style={{paddingLeft: 10, color: 'red'}}>
              {this.state.checkEmail}
            </Text>
          </View>
        </View>
        {/* Password */}

        <View>
          <View>
            <Text style={{fontWeight:'700', fontSize:18}}>Password</Text>
          </View>
          <View style={{width: Dimensions.get('window').width}}>
            <TextInput style={{height: 40,margin: 12, borderBottomWidth: 2,paddingLeft: 10, borderColor:'black'}}
              type="password"
              onChangeText={f => {
                this.onPasswordCheck(f);
              }}
              style={styles.inputField}
              placeholder="********"
              secureTextEntry={true}>
              
            </TextInput>
            <Text style={{paddingLeft: 10, color: 'red'}}>
              {this.state.checkPassword}
            </Text>
          </View>
          <View>
            <Text>+ Add picture</Text>
          </View>
          
          <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText} onPress={()=>{
           this.checkValidation();
        }}>SIGN UP</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={() => this.submit()}>
            <Text style={{alignSelf:'center', color: 'black'}}> Already have Account Sign in?</Text>
          </TouchableOpacity>
        </View>
      </View>   
    );
  }
}

/* Icon For USer */
//const user = <FontAwesome5 name={'user'} solid />;
/* Icon For Password */
//const eye = <FontAwesome5 name={'eye-slash'} solid />;
/* Styles */
const styles = StyleSheet.create({
  container1: {
    maxWidth: 500,
    justifyContent: 'center',
    paddingTop: 150,
  },
  Username: {
    fontSize: 18,
    paddingLeft: 10,
  },
  signUpContainer: {
    backgroundColor: "blue",
    borderRadius:25,
    padding: 10,
    margin:19,
  },
  signUpText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  user: {
    position: 'absolute',
    right: 10,
  },
  inputField: {
    height:40,
    margin: 12,
    borderBottomWidth: 2,
    paddingLeft: 10,
  },
});
export default Login;
