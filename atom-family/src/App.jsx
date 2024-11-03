import { RecoilRoot, useRecoilValue } from 'recoil';
import { TODOFamily } from './AtomsFam';



function App(){
  return <RecoilRoot>
    <TodoId id={1}/> <br/><br/>
    <TodoId id={2}/>

  </RecoilRoot>

}


function TodoId({id}){
const currentTodo = useRecoilValue(TODOFamily(id))  // atom family ayega after recoilvalue and then uske andr uski id 
     return <div>                                       {/*this "useRecoilValue(TODOFamily(id))" means that I just want the particular id from the TODOFamily*/}
   Title = {currentTodo.title} <br /> 
  Description = {currentTodo.description}
</div>
}

export default App;