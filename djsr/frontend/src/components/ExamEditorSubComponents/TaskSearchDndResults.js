import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Latex from "react-latex";
import { MDBContainer } from "mdbreact";
import { Container } from "@material-ui/core";
import TaskToolTip from "./TaskToolTip";
import Box from "@material-ui/core/Box";

const TaskSearchDndResults = ({ taskSearchResult }) => {
  return (
    <Container>
      {Array.isArray(taskSearchResult) && taskSearchResult.length > 0 && (
        <Droppable droppableId="searchDroppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={{
                backgroundColor: snapshot.isDraggingOver ? "red" : "white",
              }}
              className="border-top"
            >
              {taskSearchResult.map((task, index) => (
                <Draggable
                  key={"task-" + task.id}
                  draggableId={"" + task.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ ...provided.draggableProps.style }}
                      pb={3}
                      mt={3}
                      borderBottom={1}
                      // className="border-right border-left border-bottom p-2"
                    >
                      <Box style={{ position: "relative" }}>
                        <Latex>{task.text}</Latex>
                        <Box>
                          {task.answers.correctans.map((correctans) => {
                            // console.log("correctans", correctans);
                            return (
                              <span style={{ color: "green" }}>
                                <Latex>{correctans}</Latex>,{" "}
                              </span>
                            );
                          })}
                          {task.answers.wronganswers.map((wronganswer) => {
                            // console.log("wronganswer", wronganswer);
                            return (
                              <span style={{ color: "red" }}>
                                <Latex>{wronganswer}</Latex>,{" "}
                              </span>
                            );
                          })}
                        </Box>
                        <TaskToolTip task={task}/>
                      </Box>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
      {Array.isArray(taskSearchResult) && taskSearchResult.length === 0 && (
        <div>Brak zada?? o podanych kryteriach</div>
      )}
      {taskSearchResult === null && (
        <div className="text-truncate">
          Wybierz umiejetnosci z listy. Aby doda?? zadania do sprawdzianu
          przeci??gnij je na sprawdzian
        </div>
      )}
      {taskSearchResult === false && (
        <div className="text-truncate">
          Podczas zapytania do serwera wyst??pi?? b??ad spr??buj ponownie pu??niej
        </div>
      )}
    </Container>
  );
};

export default TaskSearchDndResults;
