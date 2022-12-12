
import Link from "next/link";

async function getPosts() {
	const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', { cache: 'no-store' });
	const data = await res.json();
	return data?.items as any[];
}

export default async function Page() {

	const posts = await getPosts();

	return (
		<div className="bg-black h-full text-white overflow-x-hidden font-default">
			<title>DuckyHQ // Posts</title>
			<div className="h-full grid snap-y">
				{posts?.map((post) => {
					return <Post key={post.id} post={post} />
				})}
			</div>
		</div>
	)
}

function Post({ post }: any) {
    const { id, title, headerText, imageHeader, content, gridImg, link } = post || {};

    return (
        <>
			<Link href={`/post/${id}`}>
				<div className="bg-neutral-900/50 p-8 mx-8 mb-8 border border-white/5 hover:border-white/10 border-b-8 rounded-xl hover:bg-neutral-800/40 transition-all duration-100 active:scale-[0.99]">
					<h2 className="text-5xl font-bold pb-2">{title}</h2>
					<p className="text-xl">{headerText}</p>
					<img src={imageHeader} alt="Image Header" className="rounded-lg mt-5 shadow-lg aspect-video" />
				</div>
			</Link>
        </>
    )
}
