import {React} from "react";
import "./faq.css"

const Questions = (props) => {
    const answer = props.answer
    return (
        <div className="faq-holder">
            <div className="faq-question" onClick={() => props.toggle(props.id)}>
                {props.question}
            </div>
            {props.open && <div className="faq-answer">{answer}</div>}
        </div>
    )
}

export default Questions