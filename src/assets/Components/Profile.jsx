import React from 'react'
import profile from '../profilePic.jpg'

const Profile = () => {
    return (
        <div>
            <header className="flex flex-col items-center gap-3 px-4 pt-16 pb-10 text-center">
                <img
                    className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg ring-4 ring-indigo-500"
                    src={profile}
                    alt="Yadav's profile"
                />
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                    Yadav's projects
                </h1>
                <p className="text-base text-slate-600">
                    Self-taught frontend developer
                </p>
                <div className="mt-1 h-1 w-16 rounded-full bg-indigo-500"></div>
            </header>
        </div>
    )
}

export default Profile
