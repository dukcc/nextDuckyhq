async function getPosts() {
	const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', { cache: 'no-store' });
	const data = await res.json();
	return data?.items as any[];
}

export default async function Page() {

	const posts = await getPosts();

	return (
		<div className="bg-neutral-900 h-full text-white overflow-x-hidden font-default">
			<div className="h-full grid">
				{posts?.map((post) => {
					return <Post key={post.id} post={post} />
				})}
			</div>
		</div>
	)
}

function Post({ post }: any) {
    const { id, title, content, image } = post || {};

    return (
        <>
        <div className="bg-neutral-800/30 w-[96vw] p-8 m-8 shadow-mg rounded-xl hover:bg-neutral-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-5xl font-bold pb-2">{title}</h2>
          <p className="text-xl">{content}</p>
		  <img src={image} alt="Image Header" className="aspect-video w-96 rounded-lg mt-5 shadow-lg" />
        </div>
        </>
    )
}