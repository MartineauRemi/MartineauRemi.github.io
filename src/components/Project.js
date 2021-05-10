import React, {useState} from 'react'
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from "react-icons/bi"

export default function Thumbnail({title, subtitle, overview, stack, github, url, ready}) {
    const [textVisible, setTextVisible] = useState(false)
    const onClickThumbnail = () => {
        if(!textVisible)
            setTextVisible(true)
    }

    const onClickCloseOverview = () =>{
        if(textVisible)
            setTextVisible(false)
    }
    return (
        <div
            className="project"
            onClick={onClickThumbnail}>
                {textVisible
                    ? (<div className={`project__overview ${textVisible? "project__overview--visible" : ""}`}>
                            <div
                                className="btn btn--close project__overview-close-btn"
                                onClick={onClickCloseOverview}>
                                    <span></span>
                                    <span></span>
                            </div>
                            <div className="project__heading">
                                <h3>{title}</h3>
                                <h4>{subtitle}</h4>
                            </div>
                            <p>{overview}</p>
                            <ul className="project__stack">
                                {stack.map(elt => (
                                    <li>{elt}</li>
                                ))}
                            </ul>
                            {ready
                                ? (<ul className="project__links">
                                    <li>
                                        <a href={github}><FaGithub /></a>
                                    </li>
                                    <li>
                                        <a href={url}><BiLinkExternal /></a>
                                    </li>
                                </ul>)
                                : null
                            }
                       </div>)
                    :(<div className="project__thumbnail"></div>)
                }
                <div className="project__title">
                    <h3>{title}</h3>
                </div>
        </div>
    )
}
