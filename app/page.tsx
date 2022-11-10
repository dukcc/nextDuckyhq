async function getPosts() {
	const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', { cache: 'no-store' });
	const data = await res.json();
	return data?.items as any[];
}

export default async function Page() {

	const posts = await getPosts();

	return (
		<>
		<div id="landing" className="bg-[url('../img/bg.jpg')] bg-cover bg-center text-white h-screen align-middle justify-center flex-wrap pt-[45vh] pl-[10vw]">
			<h1 className="text-7xl font-default font-bold max-[600px]:text-5xl">
				DuckyHQ
			</h1>
			<p className="text-xl font-default pt-3 max-[600px]:text-sm">
				UI Design, Web Development, and YouTube Tutorials
			</p>
		</div>

		<div id="projects" className="bg-black text-white h-screen align-middle justify-center flex-wrap">
			<h1 className="text-6xl font-default font-bold pt-[5vh] pl-[2vw]">
				Projects
			</h1>
		</div>
		<div className=" bg-[#070707] h-[38rem] grid grid-rows-1 grid-cols-4">
			{posts?.map((post) => {
				return <Post key={post.id} post={post} />
			})}
		</div>
		</>
	)
}

function Post({ post }: any) {
    const { id, title, content, image } = post || {};

    return (
        <>
        <div className="bg-[#DFDFDF] w-96 p-8 m-10 shadow-2xl rounded-xl hover:bg-[#E6E6E6] hover:shadow-blue-500/60 transition-all duration-200">
          <img src={image} alt="Image Header" className="aspect-video rounded-lg mb-5 shadow-lg" />
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="">{content}</p>
        </div>
        </>
    )
}