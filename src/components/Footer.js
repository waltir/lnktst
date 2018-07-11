import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ResponsiveMenu from 'react-responsive-navbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

const Footer = () => (
    <Accordion className="footer__accordion">
        <AccordionItem className="footer__item">
            <AccordionItemTitle className="footer__item-title">
                    <button className="footer__btn">Terms, Privacy, Contact & More</button>
            </AccordionItemTitle>
            <AccordionItemBody className="faqs-body">
                <div className="faqs-row">
                    <div className="footer">
                        <div className="content-container footer__row">
                            <div className="footer__lnk footer__col">
                            <AccordionItemTitle className="footer__item-title">
                                <button className="footer__btn footer__close-btn">X Close</button>
                            </AccordionItemTitle>
                                <NavLink className="footer__item" to="/about">About</NavLink>
                                <NavLink className="footer__item" to="/contact">Contact</NavLink>
                                <NavLink className="footer__item" to="/faqs">FAQs</NavLink>
                                <NavLink className="footer__item" to="/privacy">Privacy</NavLink>
                                <NavLink className="footer__item" to="/terms">Terms</NavLink>
                            </div>
                            <hr style={{margin: '15px'}}/>
                            <div className="footer__lnk footer__col">
                                <p className="footer__item footer__legal">© TstLnk 2018. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionItemBody>
        </AccordionItem>
    </Accordion>
);

export default Footer;