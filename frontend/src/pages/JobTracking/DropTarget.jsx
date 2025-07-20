import { useDrop } from "react-dnd";

const ItemTypes = {
  JOBCARD: 'jobcard'
};

const DropTarget = ({ status, children, onDropJob, statusColor }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.JOBCARD,
    drop: (item) => onDropJob(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }));

  return (
    <div
      ref={drop}
      className={`${statusColor} rounded-lg h-[calc(100vh-250px)] overflow-y-auto p-4 relative ${isOver ? 'bg-gray-300' : ''}`}
      style={{
        backgroundImage: 'radial-gradient(circle, #666 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {children}
    </div>
  );
};
export default DropTarget;