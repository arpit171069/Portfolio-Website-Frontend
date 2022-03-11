import { NextPage } from 'next';

interface Props {
    animationDuration: number,
    progress: number
}

export const Bar: NextPage<Props> = (props) => {
    const { animationDuration, progress } = props;
    return (
        <div
            className="bg-loader-blue h-2 left-[10%] bottom-10 fixed z-50 rounded-full"
            style={{
                width: `${progress * 80}vw`,
                transition: `width ${animationDuration}ms linear`
            }}>
        </div>
    );
}