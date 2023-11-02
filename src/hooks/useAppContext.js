import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context);

    return {
        episode: state.episode,
        setEpisode: (value) => setState(prev => ({...prev, episode: value}))
    }
}

export {useAppContext};