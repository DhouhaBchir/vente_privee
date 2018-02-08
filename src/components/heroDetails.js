import React, { Component } from 'react'
import '../styles/hero.css'
import {Icon} from 'react-fa'

class HeroDetails extends Component {
    componentDidMount () {
        this.props.fetchHero(this.props.match.params.characterId);
    }
    render () {
        let {id, comics, series, name, thumbnail, description }= this.props.hero.hero;
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">CHARACTER IDENTITY</h1>
                </header>
                <div className="hero_identity">
                    {id ?
                        <div key={id} className="hero_details">
                            <div className="hero_identity">
                                <img src={thumbnail.path+'.'+thumbnail.extension} alt='herologo' className="hero_details_logo"/>
                                <div className="hero_details_header">
                                    <h1>{name}</h1>
                                    <p className="hero_description">{description}</p>
                                    <div className="hero_details_comics">
                                        {
                                            comics.items.length ?
                                                <h6 className="hero_name">Comics</h6>
                                                : null
                                        }
                                        {
                                            comics.items.map((comic)=> {
                                                return <p key={comic.name} className="hero_url"> {comic.name} </p>
                                            })
                                        }
                                    </div>
                                    <div className="hero_details_comics">
                                        {
                                            series.items.length ?
                                                <h6 className="hero_name">Series</h6>
                                                : null
                                        }
                                        {
                                            series.items.map((serie)=> {
                                                return <p key={serie.name} className="hero_url"> {serie.name} </p>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <Icon spin name="spinner" className="waiting" />
                    }
                </div>
            </div>
        )
    }
}

export default HeroDetails;
