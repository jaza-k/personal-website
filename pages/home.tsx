import Layout from '../components/Layout';
import Lines from '../components/Lines';

export default function Home() {
    return (
        <Layout>
            <div className="introduction">
                <h1 className="name">jaza khan</h1>
                <Lines/>
                <p className="description">full-stack developer /<br/>cybersec enthusiast</p>
            </div>
        </Layout>
    )
}