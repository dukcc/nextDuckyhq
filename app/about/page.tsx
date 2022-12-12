
import Link from "next/link";

export default function Page() {
	return (
		<div className="bg-black h-full text-white overflow-x-hidden font-default">
			<title>DuckyHQ // Home</title>
			<div className="bg-[url(/bgdukc.png)] bg-center bg-[length:100vw_100vh] mx-8 rounded-xl border border-white/20 h-96 text-center grid place-items-center">
				<h1 className="text-8xl font-bold max-[655px]:text-6xl max-[430px]:text-5xl">
					DuckyHQ
				</h1>
			</div>
		</div>
	)
}