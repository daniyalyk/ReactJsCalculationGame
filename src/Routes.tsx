import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import {easy} from "./Easy/easy";
import {medium} from "./Medium/medium";
import {hard} from "./Hard/hard";
import {home} from "./home";

export const Routes = () => {


    return(
        <Switch>
            <Route path="/"   component={home} />
        </Switch>

    )
}
