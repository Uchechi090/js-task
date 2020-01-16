import React, { Component } from "react";
import PropTypes from 'prop-types';

import data from "../nodes";
import TreeNode from "./TreeNode";

class Tree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nodes: data
        };
    }

    getParentNodes = (rootNode) => {
        return rootNode.filter(node => node.hasOwnProperty("parent") === false);
    }

    getChildNodes = (parentNodeId) => {
        const { nodes } = this.state;
        return nodes.filter(node => node.parent === parentNodeId);
    }


    check = (id) => {
        document.getElementById(id).checked = true;
    }

    // uncheck = (id) => {
    //     document.getElementById(id).checked = false;
    // }

    toggleNode = (node) => {
        const { nodes } = this.state;
        nodes[node.id].isOpen = !node.isOpen;
        this.setState({ nodes });

        //this.check(node.id);
        // this.uncheck(node.id);
    }

    nodeSelect = node => {
        const { onSelect } = this.props;
        onSelect(node);
    }

    render() {
        //console.log(this.getParentNodes())
        //console.log(this.getChildNodes(0))
        const { nodes } = this.state;
        const parentNodes = this.getParentNodes(nodes);
        return (
            <div>
                {parentNodes.map(node => (
                    <TreeNode
                        key={node.id}
                        node={node}
                        getChildNodes={this.getChildNodes}
                        toggleNode={this.toggleNode}
                        nodeSelect={this.nodeSelect}
                    // level={0}
                    />
                ))}
            </div>
        )
    }

}

// Tree.propTypes = {
//     onSelect: PropTypes.func.isRequired,
// };

export default Tree;