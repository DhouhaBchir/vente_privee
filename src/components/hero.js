import React from 'react';
import '../styles/heros.css';
import {Link} from 'react-router-dom';
import FaBook from 'react-icons/lib/fa/book';

const hero = (props)=> {
    const {id, name, thumbnail, urls} = props.hero;
    return(
        <div key={id} className="hero">
            <Link to={"/characters/"+id}>
                <img src={thumbnail.path+'.'+thumbnail.extension} alt='herologo' className="hero_logo"/>
            </Link>
            <div className="hero_info">
                <p className="hero_name">{name}</p>
            </div>
            <div>
                {
                    urls.map((url)=> {
                        return <a href={url.url} key={url.type} className="hero_url"><FaBook /> {url.type} </a>
                    })
                }
            </div>
        </div>
    );
}

export default hero;
