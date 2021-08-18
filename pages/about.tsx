import Layout from '../components/Layout';
import Lines from '../components/Lines'

const About: React.FunctionComponent = () => {
    return (
            <div id="About"> 
                <h1 className="page-heading">Hey <span className="emoji">👋🏻</span></h1>
                <Lines/>

                <div className="text-block">
                    <p>I’m Jaza, a full-stack software developer and security amateur based in Canada.</p>
                    <p>I like to create, design, develop, and build new things that spark my interest.</p>
                    <p>When I’m not coding away, I can probably be found working out, playing video games or <span id="tv-show">watching Rick & Morty</span>.</p>
                </div>
            </div>
    )
}

export default About