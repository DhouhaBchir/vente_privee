import React, { Component } from 'react'
import Hero from './hero'
import {Icon} from 'react-fa'

class HerosList extends Component {
    componentDidMount () {
        this.props.fetchHeros();
    }
    render () {
        return (
            <div className="hero_items">
                {
                    this.props.heros && this.props.heros.heros.length ? this.props.heros.heros.map((hero, index) => {
                            return (
                                <Hero key={hero.id} hero={hero} heroIndex={index}/>
                            )
                        })
                        : <Icon spin name="spinner" className="waiting" />
                }
            </div>
        )
    }
}

export default HerosList;
