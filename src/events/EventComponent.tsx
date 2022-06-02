import React from "react";

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);        
    };
    
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event.clientX, 'x', event.clientY);
    };

    return (
        <div>
            <input type="text" onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drug me!</div>
        </div>
    );
}

export default EventComponent;