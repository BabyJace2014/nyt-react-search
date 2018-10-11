import React from "react";
import "./SaveBtn.css";

const SaveBtn = props => (
	<button type="submit" className="btn btn-primary save-btn" {...props}>Save Article</button>
);

export default SaveBtn;