import { useRouter } from 'next/router';

const Contact = () => {
	const router = useRouter()
	const { id } = router.query

	return <p>{id}</p>
}

export default Contact