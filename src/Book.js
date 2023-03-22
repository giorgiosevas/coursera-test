/**
 * We're taking in the props object, destructuring it, and then returning a JSX element
 * @param props - This is the object that contains all the props that were passed to the component.
 * @returns A React component
 */
const Book = (props) => {
	const { img, title, author, number } = props;

	return (
		<article className="book">
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			<span className="number">#{number + 1}</span>
		</article>
	);
};

export default Book;