import React, { Component } from "react";

import Tree from "./Tree";



class TreeRoot extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFile: ""
        }
    }

    onSelect = (node) => this.setState({ selectedFile: node })

    render() {
        // const { selectedFile } = this.state;
        return (
            <div>
                <div>
                    <Tree onSelect={this.onSelect} />
                </div>

                {/* <div>{selectedFile.name}</div> */}
            </div>
        )
    }
}

export default TreeRoot;