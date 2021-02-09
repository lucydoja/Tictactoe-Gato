import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Tictactoe } from "./Inicio";

//create your first component
export function Home() {
	return (
		<div>
			<Tictactoe></Tictactoe>
		</div>
	);
}
