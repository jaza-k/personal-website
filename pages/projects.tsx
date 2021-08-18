import Layout from "../components/Layout";
import Lines from '../components/Lines';

const Projects: React.FunctionComponent = () => {
    return (
        <div id="Projects">
            <h1 className="page-heading">Some stuff I've made <span className="emoji">🔧</span></h1>
            <Lines/>
            <div className="projects-wrapper">

                {/* THIS WILL REQUIRE MAPPING LOGIC. DO NOT HARDCODE ANYTHING !!!!!!! */}
                <div className="project">
                    <p className="project-number">??????</p>
                    <div className="project-card">
                        ??????
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects