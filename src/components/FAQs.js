import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from 'react-router-dom';

const Faqs = () => (
    <Accordion className="faqs">
        <AccordionItem className="faqs-item">
            <AccordionItemTitle className="faqs-title">
                    <h3 className="faqs-item-title">What is LnkTst?</h3>
            </AccordionItemTitle>
            <AccordionItemBody className="faqs-body">
                <div className="faqs-row">
                    <p>LnkTst is a free tool used for maintaining and testing web urls and deeplinks for mobile applications.</p>
                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem className="faqs-item">
            <AccordionItemTitle className="faqs-title">
                    <h3 className="faqs-item-title">How will LnkTst improve our teams ability to test deeplinks?</h3>
            </AccordionItemTitle>
            <AccordionItemBody className="faqs-body">
                <div className="faqs-row">
                    <p>Testing dozens of web and mobile deeplinks can be quite time consuming for most teams. These links need to be tested on numerous devices on a regular basis. LnkTst makes maintaining, sorting, and testing these links much easier.</p>
                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem className="faqs-item">
            <AccordionItemTitle className="faqs-title">
                    <h3 className="faqs-item-title">How are links sorted by default?</h3>
            </AccordionItemTitle>
            <AccordionItemBody className="faqs-body">
                <div className="faqs-row">
                    <p>All links are sorted by creation date by default. If you want one link to appear higher in the list simply adjust the creation date to be ahead of all of the other links.</p>
                </div>
            </AccordionItemBody>
        </AccordionItem>
        <AccordionItem className="faqs-item">
            <AccordionItemTitle className="faqs-title">
                    <h3 className="faqs-item-title">What data do you store on me?</h3>
            </AccordionItemTitle>
            <AccordionItemBody className="faqs-body">
                <div className="faqs-row">
                    <p>We do not store any users passwords on our servers. All authentication is handled by Google. If you want to remove all of your links or account from our server you can do so at any time from the <Link style={{borderBottom: '0px !important', borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderStyle: 'solid'}} to="/profile">Profile Screen</Link>.</p>
                </div>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
);

export default Faqs;