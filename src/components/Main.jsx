
import { useState } from "react";
import MainListSection from "./MainListSection.jsx"
import FormSection from "./FormSection.jsx"


export default function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  let [answersList, setAnswersList] = useState([])
  
  function addFormAnswersToList(formData){
    setAnswersList([...answersList, formData])
  }

  return (
    <main className="main">
      <MainListSection answersList={answersList}/>
      <FormSection addFormAnswersToList={addFormAnswersToList}/>
    </main>
  );
}
