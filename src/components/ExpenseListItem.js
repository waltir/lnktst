import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const ExpenseListItem = ({ id, description, link, note, priority, createdAt }) => (
        <Accordion className={`list-item ${priority}`}>
            <AccordionItem className="accordion-item">
                <AccordionItemTitle className="accordion-title">
                        <h3 className="list-item--title">[{priority}] {description}</h3>
                        <a target="_blank" href={link}><i class="fa fa-2x fa-external-link-square"></i></a>
                </AccordionItemTitle>
                <AccordionItemBody className="accordion-body accordion-border">
                    <div className="accordion-row">
                        <p><strong>Priority:</strong> {priority}</p>
                        <p><strong>Link:</strong> {link}</p>
                        <p><strong>Date Added:</strong> {moment(createdAt).format('MMMM Do, YYYY')}</p>
                    </div>
                        <p className="accordion-row"><strong>Note:</strong> {note}</p>
                        <Link className="accordion-right" to={`/edit/${id}`}><button className="button-outline">EDIT</button></Link>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
);

export default ExpenseListItem;

// <Link to={`/edit/${id}`}>
// <div>
//   <h3 className="list-item__title">{description}</h3>
//   <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
// </div>
// <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
// </Link>