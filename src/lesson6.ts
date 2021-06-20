enum StatusEnum {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}

interface Task {
  id: string;
  status: StatusEnum;
}
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;

notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);
