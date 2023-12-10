import Link from "next/link";

export const metadata = {
    title: "About",
    description: "Learn more about this project.",
    keywords: "about, project, next.js",
};

const About = () => {
    return (
        <>
            <h1 className="text-2xl font-bold mb-4">About This Project</h1>
            <p className="mb-2">
                This is a simple project to demonstrate how to use Next.js.
            </p>
            <p className="mb-2">
                It uses the GitHub API to fetch the most popular repositories
                for a given username. It also uses Tailwind CSS for styling. The
                project is deployed on Vercel. The source code is available on{" "}
                <a
                    href="https://github.com/lettuceketchup/next-crash-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    GitHub
                </a>
                .
            </p>
            <Link href="/">
                ←<span className="underline ml-2 my-2">Back to Home</span>
            </Link>
        </>
    );
};

export default About;
