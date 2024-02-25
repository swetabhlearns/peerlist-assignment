import { CardType, cardsData } from "@/bin/CardData";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import BoardHeader from "./component/BoardHeader";
import Card from "./component/card";

const Drag = ({ searchQuery }: any) => {
  const [data, setData] = useState<CardType[] | []>([]);

  const [filteredData, setFilteredData] = useState<CardType[] | []>([]);

  useEffect(() => {
    setData(cardsData);
    setFilteredData(cardsData);
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(cardsData);
      return;
    }
    if (searchQuery !== "") {
      const filteredData = data.map((item) => ({
        ...item,
        components: item.components.filter((component) => {
          return (
            component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            component.company
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            component.contact
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            component.number?.toString().includes(searchQuery)
          );
        }),
      }));

      setFilteredData(filteredData);
    }
  }, [searchQuery]);

  const onDrag = (e: DropResult) => {
    const { source, destination } = e;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination?.droppableId) {
      const newData = [...data];
      const index = Number(source.droppableId.split("droppable")[1]);

      const el = newData[index].components.splice(source.index, 1);
      newData[index].components.splice(destination.index, 0, ...el);
      setData(newData);
    } else {
      const newData = [...data];
      const oldIndex = Number(source.droppableId.split("droppable")[1]);
      const newIndex = Number(destination.droppableId.split("droppable")[1]);
      const el = newData[oldIndex].components.splice(source.index, 1);
      newData[newIndex].components.splice(destination.index, 0, ...el);
      setData(newData);
    }
  };

  return (
    <DragDropContext onDragEnd={onDrag}>
      <div className="pt-0 pr-6 pb-20 pl-6 flex flex-col lg:flex-row gap-2">
        {filteredData.length > 0 &&
          filteredData.map((item, index) => (
            <Droppable key={item.id} droppableId={`droppable${item.id}`}>
              {(provided) => (
                <div
                  className={`bg-gray-50 rounded-lg lg:w-1/3 w-full flex flex-col gap-2 border border-${
                    index === 0
                      ? "red-100"
                      : index === 2
                      ? "green-100"
                      : "gray-200"
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <BoardHeader
                    index={index}
                    title={item?.title}
                    length={item?.components?.length}
                  />
                  {item.components.map((component, idx) => (
                    <Draggable
                      key={component.id}
                      draggableId={`draggable${component.id}`}
                      index={idx}
                    >
                      {(provided) => (
                        <div
                          className="px-2"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Card index={index} data={component} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
      </div>
    </DragDropContext>
  );
};

export default Drag;
