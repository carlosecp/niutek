import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'

interface Props {
	placeholder?: string
	loading: boolean
	callback: (searchValue: string) => void
}

const Search = (props: Props) => {
	return (
		<Formik
			initialValues={{ searchValue: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				props.callback(values.searchValue)
				setSubmitting(false)
			}}
		>
			{({ isSubmitting, handleChange, handleSubmit }) => (
				<form
					className='h-14 border-b border-t flex-1 flex items-center'
					onSubmit={handleSubmit}
				>
					<input
						name='searchValue'
						type='text'
						className='w-full border-none text-sm pl-4 outline-none ring-0 focus:ring-0'
						placeholder={props.placeholder || `Buscar`}
						onChange={handleChange}
						disabled={isSubmitting || props.loading}
					/>
					<button
						type='submit'
						aria-label='Search'
						className='p-2 disabled:cursor-default disabled:opacity-50 mr-2'
						disabled={isSubmitting || props.loading}
					>
						<FaSearch className='text-gray-600 fill-current' />
					</button>
				</form>
			)}
		</Formik>
	)
}

export default Search
