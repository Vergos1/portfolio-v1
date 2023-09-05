import "./listTreeCustom.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";

function TreeNode({ node, onToggle }) {
	const [isOpen, setIsOpen] = useState(false);
	const hasChildren = node.children && node.children.length > 0;

	const toggleNode = () => {
		setIsOpen(!isOpen);
		onToggle(node.id);
	};

	return (
		<li className="list-tree__label">
			<span onClick={toggleNode}>
				{hasChildren && (isOpen ? "[-] " : "[+] ")}
				{node.label}
			</span>
			{isOpen && hasChildren && (
				<ul className="list-tree__children">
					{node.children.map((child) => (
						<TreeNode key={child.id} node={child} onToggle={onToggle} />
					))}
				</ul>
			)}
		</li>
	);
}
// li

function ListTreeCustom({ data }) {
	const [openNodes, setOpenNodes] = useState([]);

	const toggleNode = (nodeId) => {
		if (openNodes.includes(nodeId)) {
			setOpenNodes(openNodes.filter((id) => id !== nodeId));
		} else {
			setOpenNodes([...openNodes, nodeId]);
		}
	};

	return (
		<ul className="list-tree">
			{data.map((item) => (
				<TreeNode key={item.id} node={item} onToggle={toggleNode} />
			))}
		</ul>
	);
}
// ul >

// proptypes array
ListTreeCustom.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			label: PropTypes.string.isRequired,
			children: PropTypes.arrayOf(PropTypes.object),
		}),
	).isRequired,
};
TreeNode.propTypes = {
	node: PropTypes.shape({
		id: PropTypes.number.isRequired,
		label: PropTypes.string.isRequired,
		children: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
	onToggle: PropTypes.func.isRequired,
};

export default ListTreeCustom;
