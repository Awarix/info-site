import {React, useState } from "react";
import "./faq.css"
import Questions from "./Questions";
import data from "./data"

const Faq = () => {
    const [faqs, setFaqs] = useState (data)

    function toggle(id) {
        setFaqs(prevFaqs => {
            return prevFaqs.map((faq) => {
                return id === faq.id ? {...faq, open: !faq.open} : faq
            })
            console.log(faqs.open)
        })
    }

    const allFaq = faqs.map (faq => (
        <Questions 
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            toggle={toggle}
            />
    ))

    return (
        <div>
                {allFaq}
      </div>
    )
}

export default Faq