import React, { Component } from "react";
//import PropTypes from 'prop-types';

import data from "../nodes";
import TreeNode from "./TreeNode";

class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: data
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
    const nodeData = this.state.data;
    nodeData.push(data);
    console.log(nodeData);
  };

  nodeSelect = (checked, node) => {
    const { nodes } = this.state;
    const children = [...this.getChildNodes(node.id)];
    if (children && children.length > 0) {
      children.forEach(c => this.nodeSelect(checked, c));
    }

    const target = nodes.find(n => n.id === node.id);
    target.checked = checked;
    this.setState(state => {
      const newNodes = nodes.map(n => {
        if (n.id === node.id) {
          return {
            ...n,
            checked
          };
        }
        return {
          ...n
        };
      });
      return {
        ...state,
        nodes: newNodes
      };
    });
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
            onChange={this.nodeSelect}
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
