import Layout from '../components/Layout';
import Lines from '../components/Lines';

// ADD TRANSLATION LOGIC HERE

const Home: React.FunctionComponent = () => {
    return (
        <div id="Home">
            <div className="introduction">
                <h1 className="name">jaza khan</h1>
                <Lines/>

                <p className="description">full-stack developer /<br/>cybersec enthusiast</p>
                {/* <div>{translation.descriptionFirst} / <br/> {translation.descriptionSecond}</div> */}
            
            </div>
        </div>
    )
}

export default Home