import { TiFlowMerge } from "react-icons/ti";
import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return(
        <div>
            className={TiFlowMerge(`
            bg-neutral-900
            rounded-lg
            h-fit
            w-full
            `,
            className
        )}
        </div>
    );
}

export default Box;