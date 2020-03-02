import React from "react";

const Tag = (props) => {

    return (
        <div className="tags-input">
            {props.tags.length > 0 ? (
            <ul id="tags">
                {props.tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                            onClick={() => props.removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            ) : ''}
            <input
                type="text"
                onKeyUp={e => e.key === "Alt" ? props.addTags(e) : null}
                placeholder="Press Alt to add tags"
            />
        </div>
    );
}

export default Tag;