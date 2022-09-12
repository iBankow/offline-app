import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Order } from "../pages/Order";
import { Orders } from "../pages/Orders";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
}

export { AppRoutes };
