import { Link } from "react-router-dom";

function PageNotFound() {
    return <>
        <div className="not-found">
            <div className="not-found-wrapper">
                <h3>404 Page Not Found</h3>
                <Link className="btn" href="/">Back</Link>
            </div>
        </div>
    </>
}

export default PageNotFound;