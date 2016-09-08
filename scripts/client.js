import { render } from "react-dom";
import App from "az-scripts/components/App";

module.exports = {
	init() {
		render(<App/>, document.getElementById("app"));
	}
};
