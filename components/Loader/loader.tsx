import { useRef, useEffect } from "react";
import { NextPage } from 'next';
import { useNProgress } from '@tanem/react-nprogress';
import lottie from 'lottie-web';
import loadingJson from '../../public/loading.json';
import { Bar } from './Bar';

interface Props {
    isRouteChanging: boolean,
}

export const Loader: NextPage<Props> = (props) => {
    const container = useRef(null);
    const { isRouteChanging } = props;
    const { animationDuration, isFinished, progress } = useNProgress({ isAnimating: isRouteChanging });

    useEffect(() => {
        if (container.current) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: loadingJson
            });
            anim.setSpeed(2.5);
        }
    }, [container]);

    return (
        <div
            className="w-screen h-screen backdrop-blur fixed top-0 left-0 z-30"
            style={{
                opacity: isFinished ? 0 : 1,
                pointerEvents: isFinished ? "none" : "all",
                transition: `opacity ${animationDuration}ms linear`
            }}>
            <div className="containerLoader w-96 h-96 overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40" ref={container}></div>
            <Bar animationDuration={animationDuration} progress={progress}></Bar>
        </div>
    );
}