
import React, { useState } from 'react';
import '../style/FAQs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleFAQ}>
                <span>{question}</span>
                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQs = () => {
    const faqData = [
        { question: 'Can I have a lost item delivered to me?', answer: 'Yes, you can have a lost item delivered to you by contacting our support team.' },
        { question: 'Can I rent a car using Uber?', answer: 'Yes, Uber offers car rental services in select locations.' },
        { question: 'Can I request a ride that picks up friends in different locations?', answer: 'Yes, you can request a ride that picks up friends in different locations using the Uber app.' },
        { question: 'Can I request a taxi on Uber?', answer: 'Yes, you can request a taxi on Uber in select cities where the service is available.' },
        { question: 'Is there an Uber ride option for 5 people?', answer: 'Yes, Uber offers ride options for larger groups, including UberXL and UberSUV.' },
    ];

    return (
        <div className="FAQcontainer">
            <h1>Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FAQs;
