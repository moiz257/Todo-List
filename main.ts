import inquirer from "inquirer";
let todos : string[]=[];
let condition=true
while(condition){
let addTask = await inquirer.prompt(
    [
    
        {
            name:"todo",
            message:"WHAT DO YOU WANT TO ADD IN YOUR TODO",
            type:"input"
        },
      
        {
            name:"addmore",
            message:"DO YOU WANT TO ADD SOMETHING MORE IN YOUR TODO",
            type:"confirm",
            default:true
        }
          
        
    ]   

);

todos.push(addTask.todo);
console.log(todos);
condition=addTask.addmore
}