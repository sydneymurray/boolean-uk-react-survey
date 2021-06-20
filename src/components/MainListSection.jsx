
import AnswersList from "./AnswersList.jsx";

function MainListSection({answersList}){

return <section className={`main__list ${open ? "open" : ""}`}>
    <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
    </section>


}

export default MainListSection