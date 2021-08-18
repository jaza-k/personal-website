import Layout from '../components/Layout';

export default function Custom404() {
    return (
        <Layout>
            <h1>Whoops! <span className="404">404</span></h1>
            <p className="go-home"><a href="#">Go back home</a></p>
        </Layout>
    )
}