export const taskParser = (task) => {
  // console.log("taskparser",task)
  let newTask = JSON.parse(JSON.stringify(task));
  // console.log("taskparser parsed", newTask)
  // let draggedItem
  newTask.answers={}
  newTask.correctans = JSON.parse(newTask.correctans.replace(/'/g, '"'))
  newTask.wronganswers = JSON.parse(newTask.wronganswers.replace(/'/g, '"'))
  newTask.answers={correctans:newTask.correctans,wronganswers:newTask.wronganswers}
  // newTask.dataset = newTask.dataset.map((dataSet) => {
  //   dataSet.answers = dataSet.answers.map((answer) => {
  //     answer.allanswers = JSON.parse(answer.allanswers.replace(/'/g, '"'));
  //     answer.correctans = JSON.parse(answer.correctans.replace(/'/g, '"'));
  //     return answer
  //   });
  //   dataSet.answers = dataSet.answers[0];
  //   return dataSet
  // });
  // console.log("oldtask", task,"new", newTask)
  // console.log("taskparser nn",newTask)
  return newTask;
};

const tasksParser = (tasks) => {
  return tasks.map(taskParser);
};

export default tasksParser;