import { NextPage } from 'next';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import spinnerJSON from '../../public/spinner.json';

interface Props {
    loading: boolean,
}

export const Spinner: NextPage<Props> = (props) => {
    const { loading } = props;
    const container = useRef(null);
    useEffect(() => {
        if (container.current) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: spinnerJSON
            });
            anim.setSpeed(1.5);
        }
    }, [container]);
    return loading ? <div className="spinner w-20 h-20 overflow-hidden" ref={container}></div> : null;
}