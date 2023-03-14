import React from "react";
import navigationStrings from "../constants/navigationStrings";
import * as Screens from '../screens';
import TabRoutes from "./TabRoutes";

export default function(Stack) {
    return(
        <>
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
            <Stack.Screen name={navigationStrings.USERS} component={Screens.Users} />
            <Stack.Screen name={navigationStrings.MESSAGE} component={Screens.Message} />
        </>
    )
}