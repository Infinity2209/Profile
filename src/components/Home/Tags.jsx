import React from "react";
import "./Tags.css";

const Tags = ({ tags }) => {
    return (
        <div className="tags-container">
            {tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default Tags;
