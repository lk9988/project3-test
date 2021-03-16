import React from "react";
import { Typography } from "@material-ui/core";
import ButtonAppBar from "../components/ButtonAppBar/ButtonAppBar";
import SignIn from "../components/Signin/Signin";
const Main = (props) => {
	return (
		<div>
			<ButtonAppBar></ButtonAppBar>
			<SignIn></SignIn>
		</div>
	);
};

export default Main;
