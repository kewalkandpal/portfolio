import "./404Page.css";
import { Link } from 'react-router-dom';

function PageNotFound(){
    return(
        <div className="page_error">
            <h1>404</h1>
            <h2>Oops! you've lost in space.</h2>
            <p>We Can't find the page that you're looking for...</p>
            <Link to="/"><button className="btn_error">Go Home</button></Link>
        </div>
    )
};

export default PageNotFound;