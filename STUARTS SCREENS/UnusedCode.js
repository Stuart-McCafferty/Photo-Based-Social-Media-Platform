//going to be used in auth and navigation between loginscreen and rest of app
//had to remove to simplify the navigation while I put everything into seperate files
const AuthContext = React.createContext();


function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}






//inside app.js before return()
const [state, dispatch] = React.useReducer(
  (prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
  },
  {
    isLoading: true,
    isSignout: false,
    userToken: null,
  }
);

React.useEffect(() => {
  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = async () => {
    let userToken;

    try {
      userToken = await AsyncStorage.getItem('userToken');
    } catch (e) {
      // Restoring token failed
    }

    // After restoring token, we may need to validate it in production apps

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    dispatch({ type: 'RESTORE_TOKEN', token: userToken });
  };

  bootstrapAsync();
}, []);

const authContext = React.useMemo(
  () => ({
    signIn: async data => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT' }),
    signUp: async data => {
      // In a production app, we need to send user data to server and get a token
      // We will also need to handle errors if sign up failed
      // After getting token, we need to persist the token using `AsyncStorage`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
  }),
  []
);



//inside
  <AuthContext.Provider value={authContext}>
  <LoginStack.Navigator>
    {state.isLoading ? (
      // We haven't finished checking for the token yet
      <LoginStack.Screen name="Splash" component={SplashScreen} />
    ) : state.userToken == null ? (
      // No token found, user isn't signed in
      <LoginStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign in',
      // When logging out, a pop animation feels intuitive
          animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
    ) : (





        </LoginStack.Navigator>

          </AuthContext.Provider>
