import block from './css/Block.module.css';

function Block({ content }) {
	return (
		<div className={block.main}>
			<div className={block.content}>{content}</div>
		</div>
	);
}

export default Block;
