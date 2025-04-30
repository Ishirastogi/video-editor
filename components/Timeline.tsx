"use client";

import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Mock function to simulate video thumbnails
const getThumbnailUrl = (sceneIndex: number) => `https://via.placeholder.com/150/0000FF/808080?Text=Scene+${sceneIndex}`;

const initialScenes = [
  { id: "1", title: "Scene 1", thumbnailUrl: getThumbnailUrl(1) },
  { id: "2", title: "Scene 2", thumbnailUrl: getThumbnailUrl(2) },
  { id: "3", title: "Scene 3", thumbnailUrl: getThumbnailUrl(3) },
  { id: "4", title: "Scene 4", thumbnailUrl: getThumbnailUrl(4) },
];

export default function Timeline() {
  const [scenes, setScenes] = useState(initialScenes);

  useEffect(() => {
    const savedScenes = localStorage.getItem("scenes");
    if (savedScenes) {
      setScenes(JSON.parse(savedScenes));
    }
  }, []);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const updatedScenes = Array.from(scenes);
    const [movedScene] = updatedScenes.splice(result.source.index, 1);
    updatedScenes.splice(result.destination.index, 0, movedScene);
    setScenes(updatedScenes);

    // Save the updated timeline in localStorage
    localStorage.setItem("scenes", JSON.stringify(updatedScenes));
  };

  const addNewScene = () => {
    const newScene = { id: uuidv4(), title: `Scene ${scenes.length + 1}`, thumbnailUrl: getThumbnailUrl(scenes.length + 1) };
    setScenes((prevScenes) => {
      const updatedScenes = [...prevScenes, newScene];
      // Save the updated timeline in localStorage
      localStorage.setItem("scenes", JSON.stringify(updatedScenes));
      return updatedScenes;
    });
  };

  const deleteScene = (id: string) => {
    const updatedScenes = scenes.filter((scene) => scene.id !== id);
    setScenes(updatedScenes);
    // Save the updated timeline in localStorage
    localStorage.setItem("scenes", JSON.stringify(updatedScenes));
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📽️ Video Timeline</h2>
        <button
          onClick={addNewScene}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold transition"
        >
          ➕ Add Scene
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="timeline" direction="horizontal">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex space-x-4 overflow-x-auto"
            >
              {scenes.map((scene, index) => (
                <Draggable key={scene.id} draggableId={scene.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="relative min-w-[180px] h-36 bg-indigo-500 rounded-lg flex flex-col items-center justify-center text-white font-semibold hover:bg-indigo-600 transition cursor-pointer"
                      onDoubleClick={() => deleteScene(scene.id)}
                    >
                      {/* Thumbnail */}
                      <img src={scene.thumbnailUrl} alt={scene.title} className="w-full h-20 object-cover rounded-t-lg" />

                      <div className="flex flex-col items-center">
                        <span>{scene.title}</span>
                        <span className="absolute top-1 right-1 text-xs bg-red-500 rounded-full px-2 py-0.5">
                          ✖
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <p className="text-gray-400 text-sm mt-4">Tip: Double-click a scene to delete it!</p>
    </div>
  );
}
