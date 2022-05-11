import Process from "components/Processes"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const DND = ({ processes, setProcesses, openForm, openForms, addProcess }) => {
  const reorder = (startIndex, endIndex) => {
    const result = Array.from(processes)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  function onDragEnd(result) {
    if (!result.destination) return
    const newItems = reorder(result.source.index, result.destination.index)
    setProcesses([...newItems])
  }

  const getItemStyle = (isDragging, draggableStyle) => {
    return {
      // some basic styles to make the items look a bit nicer
      userSelect: "none",
      // background: isDragging ? "lightblue" : "lightgrey",

      // styles we need to apply on draggables
      ...draggableStyle,
    }
  }

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? "lightblue" : "lightgrey",
  })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {processes.map((process, index) => (
              <Draggable
                key={process.uuid}
                draggableId={"" + process.uuid}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <Process
                      isDragging={snapshot.isDragging}
                      process={process}
                      openForm={openForm}
                      openForms={openForms}
                      addProcess={addProcess}
                      index={index}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DND
