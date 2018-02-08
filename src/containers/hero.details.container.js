import heroDetails from "../components/heroDetails";
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import config from '../config/index';
import crypto from 'crypto';

const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';

const mapStateToProps= (state)=> {
    return {
        hero: state.hero
    };
};
const mapDispatchToProps = (dispatch) => {
    let ts = new Date().getTime();
    let  hash = crypto.createHash('md5').update(ts+API_PRIVATE+API_PUBLIC).digest('hex');
    return {
        fetchHero: (characterId) => {
            dispatch((dispatch) => {
                fetch(config.serverUrl+'/v1/public/characters/'+characterId+'?ts='+ts+'&apikey='+API_PUBLIC+'&hash='+hash)
                    .then((result)=>{
                        return result.json()
                    })
                    .then(result=>{
                        dispatch({
                            type: "FETCH_HERO_DETAILS_SUCCESS",
                            payload: result.data.results[0]
                        });
                    })
                    .catch((err) => {
                        dispatch({
                            type: "FETCH_HERO_ERROR",
                            payload: err
                        });
                    })
            });
        }
    };
};

const heroDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(heroDetails);

export default heroDetailsContainer;
