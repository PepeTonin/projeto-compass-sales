import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp/SignUp';
import ForgotPassword from '../screens/ForgotPass/ForgotPassword';
import AuthRoutes from './AuthRoutes';

const Stack = createNativeStackNavigator();

export default function NonAuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
