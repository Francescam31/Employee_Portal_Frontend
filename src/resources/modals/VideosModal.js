import React from "react";

const VideosModal = () => {
    const openVideoLink = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div>
            <div> 
                <h2>Video 1 title</h2>
                <p> Video 1 Description</p>
                <button onClick={() => openVideoLink('video link')}>Watch Video</button>
            </div>
            <div> 
                <h2>Video 2 title</h2>
                <p> Video 2 Description</p>
                <button onClick={() => openVideoLink('video link')}>Watch Video</button>
            </div>
            <div> 
                <h2>Video 3 title</h2>
                <p> Video 3 Description</p>
                <button onClick={() => openVideoLink('video link')}>Watch Video</button>
            </div>
        </div>

    )
}

export default VideosModal;