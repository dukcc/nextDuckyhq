
async function getPost(postId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function PostPage({ params }: any) {
    const post = await getPost(params.id)

    return (
		<div className="bg-black h-full text-white overflow-x-hidden font-default">
			<title>DuckyHQ // Post</title>
            <div className="grid place-content-between grid-cols-2 grid-rows-1 h-full gap-8
            max-[1400px]:grid-cols-1 max-[1400px]:grid-rows-2">
                <div className="bg-neutral-900/50 p-8 mx-8 w-full border border-white/5 border-b-8 mb-10 rounded-xl">
                    <img className="aspect-video w-full mb-8 rounded-xl" src={post.imageHeader} alt="Main Image" />
                    <h2 className="text-5xl font-bold">{post.title}</h2>
                    <p className="text-xl my-8">{post.content}</p>
                    <a className="bg-white text-black p-3 text-xl font-bold rounded-xl hover:bg-logo-2 hover:text-white transition-all duration-100 active:scale-[0.99]" href={post.link}>View Content</a>
                </div>
                <img className="rounded-xl border border-white/10 aspect-[9 / 16] w-[50rem] mx-8 mb-8" src={post.gridImg} alt="Main Image" />
            </div>
		</div>
    )
}