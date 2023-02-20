import Head from 'next/head'
import { Fragment } from 'react'

import { getTopAuthors } from '../../api/authors'
import ListGridModal from '../../components/modals/ListGridModal'
import AuthorGrid from '../../components/author/AuthorGrid'

function AuthorListPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Popular Authors</title>
				<meta name='description' content='A list of all popular authors!' />
			</Head>

			<ListGridModal listTitle='All popular authors'>
				{<AuthorGrid authors={props.authors} />}
			</ListGridModal>
		</Fragment>
	)
}

export async function getStaticProps() {
	const authors = await getTopAuthors()

	if (!authors) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			authors: authors.data,
		},
		revalidate: 60, //for production
	}
}

export default AuthorListPage
