import React, { Component } from "react";
//import PropTypes from 'prop-types';

import data from "../nodes";
import TreeNode from "./TreeNode";

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: data,
      data: ""
    };
  }

  getParentNodes = rootNode => {
    return rootNode.filter(node => node.hasOwnProperty("parent") === false);
  };

  getChildNodes = parentNodeId => {
    const { nodes } = this.state;
    return nodes.filter(node => node.parent === parentNodeId);
  };

  toggleNode = node => {
    const { nodes } = this.state;
    nodes[node.id].isOpen = !node.isOpen;
    this.setState({ nodes });
  };

  onChange = data => {
    console.log(data);
  };

  nodeSelect = node => {
    data.forEach((_, key) => {
      if (data[key].name === node.name) data[key].checked = !node.checked;
    });
    this.setState([...data]);
    this.onChange(data);
  };

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
            onClick={() => this.nodeSelect(node)}
            onChange={this.onChange}
            // level={0}
          />
        ))}
      </div>
    );
  }
}

// Tree.propTypes = {
//     onSelect: PropTypes.func.isRequired,
// };

export default Tree;
