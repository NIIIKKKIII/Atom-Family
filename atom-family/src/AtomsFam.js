import { atomFamily } from "recoil";



export const TODOS =[{
    id: 1,
    title: "go to the gym",
    description: "hit the gym at 7am "
},{
    id: 2,
    title: "got to eat food ",
    description: "eat food at 9pm"

}]

export const TODOFamily = atomFamily({
    key: "TODOFamilyAtom",
    default: id =>{
        return TODOS.find(x=> x.id === id)
    }
})

//or you can use this as well 

// export const TODOFamily = atomFamily({
//     key: "TODOFamilyAtom",
//     default: id=>{
//         foundtodo = null;
//         for(let i=0; i<=TODOS.length; i++){
//             if(TODOS[i].id === id){
//                 foundtodo= TODOS[i]
//             }
//         }
//     }
//     }
// })