import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
function App() {
	return (
		<div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
			{/* Radial Gradient Layer */}
			<div className="fixed top-0 -z-10 h-full w-full">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#ffffff1a,#000)]"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-8">
				<Navbar />
				<Hero />
				<About />
				<Technologies />
			</div>
		</div>
	);
}

export default App;
