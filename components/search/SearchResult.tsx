interface Props {
	id: number
	title: string
}

const SearchResult = ({ id, title }: Props) => {
	return (
		<div className='p-2 shadow'>
			{id} - {title}
		</div>
	)
}

export default SearchResult
