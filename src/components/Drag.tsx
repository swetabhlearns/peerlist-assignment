"use client";

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

const Drag = () => {
  const [data, setData] = useState<CardType[] | []>([]);
  useEffect(() => {
    setData(cardsData);
  }, []);

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
      <div className="pt-0  pr-6 pb-20 pl-6 flex gap-2 ">
        {data.length &&
          data.map((item, index) => (
            <Droppable key={item.id} droppableId={`droppable${item.id}`}>
              {(provided) => (
                <div
                  className={`bg-gray-50 rounded-lg w-1/3  flex flex-col gap-2 border border-${
                    index === 0
                      ? "bg-red-100"
                      : index === 2
                      ? "bg-green-100"
                      : "bg-gray-200"
                  } `}
                  key={index}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <BoardHeader
                    index={index}
                    title={item?.title}
                    length={item?.components?.length}
                  />
                  {item.components.map((name, idx) => (
                    <Draggable
                      key={name.id}
                      draggableId={`draggable${name.id}`}
                      index={idx}
                    >
                      {(provided) => (
                        <div
                          className="px-2"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Card index={index} data={name} />
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
