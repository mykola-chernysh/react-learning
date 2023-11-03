import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
    const [state, setState] = useContext(Context);

    return {
        ep: state.ep,
        setEp: (value) => setState(prev => ({...prev, ep: value})),
        chars: state.chars,
        setChars: (value) => setState(prev => ({...prev, chars: value}))
    }
}

export {useAppContext};