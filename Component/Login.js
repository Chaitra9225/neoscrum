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
import SignUp from './SignUp';

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
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <View style={{backgroundColor: '#f0f8ff', flex: 1}}>
        <View style={styles.container1}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 50, color: 'black', fontWeight: 'bold'}}>
              Neo
            </Text>

            <Text style={{fontSize: 50, color: 'red', fontWeight: 'bold'}} > Scrum </Text>
          </View>
        </View>

        <View style={{paddingTop: 50}}>
          <Text style={{fontSize: 40, color: 'black', alignSelf: 'center'}}>
            Login
          </Text>
        </View>

        {/* Username */}
        <View>
          <View>
            <Text style={styles.Username}>UserName</Text>
          </View>
          <View style={{width: Dimensions.get('window').width}}>
            <TextInput
              onChangeText={e => {
                this.onEmailChange(e);
              }}
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
            <Text style={styles.Username}>Password</Text>
          </View>
          <View style={{width: Dimensions.get('window').width}}>
            <TextInput
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
          <View style={{width: Dimensions.get('window').width, padding: 10}}>
            <Button
              onPress={() => {
                this.checkValidation();
              }}
              style={{borderRadius: 500}}
              title="Login"
            />
          </View>

          <TouchableOpacity onPress={() => this.submit()}>
            <Text> Don't Have a Account Sign up?</Text>
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
  user: {
    position: 'absolute',
    right: 10,
  },
  inputField: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    paddingLeft: 10,
  },
});
export default Login;
