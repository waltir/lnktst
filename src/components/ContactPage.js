import React from 'react';
import HeaderPublic from './HeaderPublic';
import Footer from './Footer';

export class ContactPage extends React.Component {
  onContact = () => {
        console.log('contacted');
        var mailto = "mailto:example@email.com";
        var subject = "?subject=";
        var body = "&body=";
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var emailAddress = document.getElementById('emailAddress').value;
        var emailSubject = document.getElementById('emailSubject').value;
        var emailBody = document.getElementById('emailBody').value;
        var email = mailto + subject + emailSubject + body + 'NAME:%20' + firstName + '%20' + lastName + '%0D%0A%0D%0A' + 'EMAIL:%20' + emailAddress + '%0D%0A%0D%0A' + emailBody;
        var total = document.getElementById("mailto").setAttribute("href", email);
        window.open(email);
    };
    render() {
      return (
      <div>
        <HeaderPublic />
          <div className="page-header">
            <div className="content-container">
              <h1 className="page-header__title">Contact</h1>
            </div>
          </div>
        <div className="content-container" style={{marginTop: '0px', marginBottom: '150px'}}>
          <a href="" id="mailto"></a>
            <form onSubmit={this.onContact} className="form" style={{marginTop: '70px'}}>
              <input
              type="text" id="firstName" required className="text-input"
              placeholder="First Name"
              />
              <input
              type="text" id="lastName" required className="text-input"
              placeholder="Last Name"
              />
              <input
              type="email" id="emailAddress" required className="text-input"
              placeholder="Email Address"
              />
              <input
              type="text" id="emailSubject" required className="text-input"
              placeholder="Subject"
              />
              <textarea
              type="text-area" id="emailBody" required className="text-input"
              placeholder="Please enter a message."
              />
              <button type="submit" className="button button--secondary margin-s" style={{width: '300px', marginLeft: '0px'}}>Submit</button>
            </form>
        </div>
        <Footer />
      </div>
  )
}};

export default ContactPage;