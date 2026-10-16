import React from 'react'
import projects from '../Projects.json'

const ProjectCard = () => {
    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-16 sm:grid-cols-2 text-center">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group flex flex-col rounded-xl border border-slate-300 bg-white p-4 shadow-sm transition hover:border-indigo-500 hover:shadow-lg"
                >
                    <div className="aspect-8/5 overflow-hidden rounded-lg bg-slate-200">
                        <img
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                            src={project.image}
                            alt={project.name}
                        />
                    </div>

                    <div className="flex flex-1 flex-col gap-1 pt-4">
                        <h2 className="text-lg font-semibold text-slate-900">
                            {project.name}
                        </h2>
                        <p className="text-sm text-slate-600">{project.line}</p>

                        <a
                            className="mt-4 inline-block w-fit rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 mx-auto"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           Click Here
                        </a>
                    </div>
                </div>
            ))}

            <a
                href="https://github.com/Y2K-Yadav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-48 flex-col items-center justify-center rounded-xl bg-slate-900 p-6 text-center text-white shadow-md transition hover:bg-slate-800 hover:shadow-lg"
            >
                <span className="text-lg font-semibold">More on GitHub</span>
                <p className="mt-1 text-sm text-slate-300">See all my code and projects</p>
            </a>
        </div>
    )
}

export default ProjectCard