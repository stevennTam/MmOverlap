import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/Octicons-mark-github.svg'
import portfolioIcon from '../assets/portfolio.svg'

type ProfileProps = {
    name: string
    title: string
    image: string
    githubLink: string
    portfolioLink: string
    linkedinLink: string
}

function DevCard({name, title ,image, linkedinLink ,githubLink, portfolioLink}: ProfileProps) {
  //https://picsum.photos/200
  return (
    <div>
        <div className="max-w-[200px] mx-auto my-10 bg-opacity-0 border-b-4 rounded-lg p-5">
            <img className="w-32 h-32 rounded-full mx-auto border-8 border-light-gold" src={image} alt="Profile picture" />
            <h2 className="text-center text-2xl font-semibold mt-3 text-light-maroon">{name}</h2>
            <p className="text-center text-gray-600 mt-1">{title}</p>
            <div className="flex justify-center mt-3">
                <a href={linkedinLink} className="text-blue-500 hover:text-blue-700 mx-3"><img src={linkedinIcon} alt='Linkedin'></img></a>
                <a href={githubLink} className="text-blue-500 hover:text-blue-700 mx-3"><img src={githubIcon} alt='Github'></img></a>
                <a href={portfolioLink} className="text-blue-500 hover:text-blue-700 mx-3"><img src={portfolioIcon} alt='Portfolio'></img></a>
            </div>
        </div>
    </div>
  )
}

export default DevCard