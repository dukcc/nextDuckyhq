
import Link from "next/link";

async function getPosts() {
	const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', { cache: 'no-store' });
	const data = await res.json();
	return data?.items as any[];
}

export default async function Page() {

	const posts = await getPosts();

	return (
		<>
		<title>DuckyHQ // Home</title>
		<div className="bg-[url(/gradient.png)] font-default text-white bg-center rounded-b-2xl bg-cover grid grid-cols-2 grid-rows-2 h-[59rem] text-left pl-[0.80rem] pt-96">
			<div>
				<h1 className="text-[15rem] bg-clip-text leading-[13rem] font-bold max-[1245px]:text-9xl max-[1333px]:pl-[0.50rem] max-[750px]:text-[3.25rem] max-[750px]:pl-[0.70rem]">
					DuckyHQ
				</h1>
			</div>
			<div></div>
			<div>
				<p className="text-5xl pl-[0.90rem] max-[1333px]:text-4xl max-[750px]:text-xl w-[90%]">
					UI design, web development, content creation, and gaming.
				</p>
			</div>
			<div>
				<p className="text-5xl max-[1333px]:text-4xl max-[750px]:text-xl w-[45rem]">
					Ran by dukc.
				</p>
			</div>
		</div>
		<div className="font-default text-white">
			<h1 className="text-8xl m-8 p-8 bg-neutral-900/50 border border-white/5 rounded-xl">
				Work
			</h1>
			<div className="h-full snap-y overflow-x-scroll w-full inline-block">
				{posts?.map((post) => {
					return <Post key={post.id} post={post} />
				})}
			</div>
		</div>
		<h1 className="text-8xl p-8 mx-8 mb-8 bg-neutral-900/50 border border-white/5 rounded-xl font-default text-white">
			About
		</h1>
		<div className="font-default text-white">
			<div className="grid grid-rows-1 grid-cols-2 h-[30rem] max-[850px]:grid-rows-2 max-[850px]:grid-cols-1">
				<div className="p-8 mx-8 mb-8 bg-neutral-900/50 border border-white/5 rounded-xl max-[850px]:h-[28rem]">
					<h3 className="font-bold text-[2.5rem]">dukc</h3>
					<p className="text-xl">
						Hello! I am a Canadian UI designer, web developer, and content creator. I love designing UI concepts, websites, apps, etc. And I like programming websites, and random other stuff like python apps, Discord bots, and more. I also create tutorials on YouTube, and like to stream games. I am very good at motion design, which means I can make cool graphics for videos, mainly in After Effects, and can do quick stuff in my main editing program: Davinci Resolve.
					</p>
				</div>
				<div className="p-8 mr-8 mb-8 bg-[url(/bg.png)] border border-white/5 rounded-xl max-[850px]:ml-8 max-[850px]:mt-60 max-[850px]:h-72"></div>
			</div>
		</div>
		</>
	)
}

function Post({ post }: any) {
    const { id, title, headerText, imageHeader, content, gridImg, link } = post || {};

    return (
        <>
		<Link href={`/post/${id}`}>
			<div className="bg-neutral-900/50 p-8 mx-8 mb-8 grid grid-cols-2 grid-rows-1 border border-white/5 hover:border-white/10 border-b-8 rounded-xl hover:bg-neutral-800/40 transition-all duration-100 active:scale-[0.99] max-[850px]:grid-rows-2 max-[850px]:grid-cols-1">
				<div className="">
					<h1 className="text-7xl font-bold pb-2">{title}</h1>
					<p className="text-2xl w-[90%]">{headerText}</p>
				</div>
				<div className="">
					<img src={imageHeader} alt="Image Header" className="rounded-lg shadow-lg aspect-video" />
				</div>
			</div>
		</Link>
        </>
    )
}
