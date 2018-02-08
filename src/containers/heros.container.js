import herosList from "../components/herosList";
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import config from '../config/index';
import crypto from 'crypto';

const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';

const mapStateToProps= (state)=> {
    return {
        heros: state.heros,
        hero: state.hero
    };
};
const mapDispatchToProps = (dispatch) => {
    let ts = new Date().getTime();
    let hash= crypto.createHash('md5').update(ts+API_PRIVATE+API_PUBLIC).digest('hex');
    return {
        fetchHeros: () => {
            dispatch((dispatch) => {
                fetch(config.serverUrl+`/v1/public/characters?ts=`+ts+'&apikey='+API_PUBLIC+'&hash='+hash)
                    .then((result)=>{
                        return result.json()
                    })
                    .then(result=>{
                        dispatch({
                            type: "FETCH_HEROS_SUCCESS",
                            payload: result.data.results
                        });
                    })
                    .catch((err) => {
                        dispatch({
                            type: "FETCH_HEROS_ERROR",
                            payload: err
                        });
                    })
            });
        }
    };
};

const herosListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(herosList);

export default herosListContainer;
