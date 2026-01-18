import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div
            className="hero min-h-screen w-full bg-[url('/assets/EmptyClassroomPic.jpg')] bg-cover bg-center bg-left"
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Mr. Peña's Music Class</h1>
                    <p className="mb-5">
                        Explore this website to learn more about our music class!
                    </p>
                    <Link to="/aboutme">
                        <button className="btn btn-primary">About me</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
