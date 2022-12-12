
export default function Page() {
	return (
		<>
		<div className="bg-black h-full text-white overflow-x-hidden font-default">
			<title>DuckyHQ // Home</title>
			<div className="bg-[url(/bg.png)] bg-center bg-cover mx-8 rounded-xl border border-white/20 h-full text-left grid place-items-left pl-[0.80rem] mt-[12rem]">
				<h1 className="text-[15rem] bg-clip-text font-bold pt-[1.1rem] max-[1333px]:text-9xl max-[1333px]:pl-[0.50rem] max-[750px]:text-[3.25rem] max-[750px]:pl-[0.70rem]">
					DuckyHQ
				</h1>
				<p className="text-5xl pb-24 pl-[0.90rem] max-[1333px]:text-4xl max-[750px]:text-xl w-[45rem]">
					Professionals in UI design, web development, and content creation.
				</p>
			</div>
		</div>
		</>
	)
}
