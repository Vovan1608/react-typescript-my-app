interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode[];
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <>
            <h1>
                {color}
            </h1>

            <button onClick={onClick}>Click</button>
        </>
    );
}

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click</button>
        </div>
    )
}
