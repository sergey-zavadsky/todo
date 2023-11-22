import block from './css/Block.module.css';

function Block({ parent }) {
	return (
		<div className={block.main}>
			<div className={block.content}>{parent}</div>
		</div>
	);
}

export default Block;
