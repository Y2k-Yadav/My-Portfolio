import './App.css'
import Profile from './assets/Components/Profile'
import ProjectCard from './assets/Components/ProjectCard'
import Footer from './assets/Components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
        <Profile />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  )
}

export default App