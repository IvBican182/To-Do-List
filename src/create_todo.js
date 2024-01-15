let toDoArray = [];

export const createToDo = (Title, Description, Duedate, Priority, Checklist) => {
    console.log("Creating a to do now");
    console.log(Title, Description, Duedate, Priority, Checklist);
    console.log("pushing a ToDo in a toDoArray.. ");
    toDoArray.push({Title, Description, Duedate, Priority, Checklist});
    console.log(toDoArray);
    return {Title, Description, Duedate, Priority, Checklist};

}