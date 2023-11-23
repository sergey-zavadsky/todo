import block from './css/Block.module.css';

type Props = {
	parent: string | JSX.Element;
};

function Block({ parent }: Props) {
	return (
		<div className={block.main}>
			<div className={block.content}>{parent}</div>
		</div>
	);
}

export default Block;
