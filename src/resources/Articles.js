import { Link } from "react-router-dom";

const Articles = () => {
    return (
        <div className="articles-carousel">
            <div className="article-1">
                <Link to="https://www.forbes.com/sites/amyfeldman/2023/12/13/startup-prevents-workers-back-injuries-with-exosuit-thats-practical-rather-than-iron-man-flashy/">Article Title</Link>
            </div>
            <div className="article-2">
                <Link to="https://www.forbes.com/sites/amyfeldman/2023/12/13/startup-prevents-workers-back-injuries-with-exosuit-thats-practical-rather-than-iron-man-flashy/">Article Title</Link>
            </div>
            <div className="article-3">
                <Link to="https://www.forbes.com/sites/amyfeldman/2023/12/13/startup-prevents-workers-back-injuries-with-exosuit-thats-practical-rather-than-iron-man-flashy/">Article Title</Link>
            </div>
         </div>
)
}

export default Articles;