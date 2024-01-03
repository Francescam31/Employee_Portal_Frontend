import React from "react";

const Articles = () => {
    const articlesCarousel = [
        {
            title: "Startup Aims To Prevent Workers’ Back Injuries With ‘Exosuit’ That’s Practical Rather Than ‘Iron Man’ Flashy",
            link: 'https://www.forbes.com/sites/amyfeldman/2023/12/13/startup-prevents-workers-back-injuries-with-exosuit-thats-practical-rather-than-iron-man-flashy/'
        },
        {
            title: "article 2",
            link: 'https://www.forbes.com/sites/amyfeldman/2023/12/13/startup-prevents-workers-back-injuries-with-exosuit-thats-practical-rather-than-iron-man-flashy/'
        },
        {
            title: "article 3",
            link: 'https://www.forbes.com/sites/amyfeldman/2023/12/13/startup-prevents-workers-back-injuries-with-exosuit-thats-practical-rather-than-iron-man-flashy/'
        }
    ]
    return (
        <div className="articles-container">
            {articlesCarousel.map((article, index) => (
                <div key={index} className="article">
                    <h2 className="article-title">{article.title}</h2>
                    <a href={articles.link}>Learn More</a>
                </div>
            ))}
         </div>
);
}
export default Articles;