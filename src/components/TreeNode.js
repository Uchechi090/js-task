import React from "react";
import styled from 'styled-components';
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import PropTypes from 'prop-types';


const getPaddingLeft = (level, node) => {
    let paddingLeft = level * 20;
    if (node && node.parent) paddingLeft += 20;
    return paddingLeft;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.node)}px;
  &:hover {
    background: lightgray;
  };
  &:active {
    background: #86D3FF;
  };
`;

const NodeCaret = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const getNodeLabel = (node) => node.name;

const TreeNode = (props) => {
    const { node, getChildNodes, toggleNode, level } = props;
    return (
        <>
            <StyledTreeNode level={level}>
                <input type="checkbox" name={node.name} value={node.id}/>
                <NodeCaret onClick={() => toggleNode(node)}>
                    {node.isOpen ? <FaCaretDown /> : <FaCaretRight />}
                </NodeCaret>

                <span>
                    {getNodeLabel(node)}
                </span>
            </StyledTreeNode>

            {node.isOpen && getChildNodes(node.id).map(childNode => (
                <TreeNode
                    {...props}
                    key={childNode.id}
                    node={childNode}
                    level={level + 1}
                />
            ))}
        </>
    )

}

TreeNode.propTypes = {
    node: PropTypes.object.isRequired,
    getChildNodes: PropTypes.func.isRequired,
    level: PropTypes.number.isRequired,
};

TreeNode.defaultProps = {
    level: 0,
};

export default TreeNode;