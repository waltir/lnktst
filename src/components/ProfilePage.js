import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { startRemoveAllExpenses, startRemoveUser } from '../actions/expenses';
import {firebase, googleAuthProvider} from '../firebase/firebase';
import {Route, Redirect} from 'react-router-dom';
import Footer from './Footer';

export class EditExpensePage extends React.Component {
    onRemoveUser = () => {
      this.props.startRemoveUser({users: this.props.uid});
      setTimeout(function(){
        window.location.reload();
        return firebase.auth().signOut();
        this.props.history.push('');
        console.log("Data has been removed from the database");
      }, 2000)
    };
    onRemoveAllLinks = () => {
        this.props.startRemoveAllExpenses({expenses: this.props.id});
        window.location.reload();
        this.props.history.push('/');
        console.log("Data has been removed from the database");
    };
    render() {
      return (  
    <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Profile</h1>
      </div>
    </div>
    <div className="profile-page">
      <div className="content-container">
        <h2 className="profile__title">My LnkTst Data</h2>
        <p className="profile__action">At LnkTst, it’s important to us that you have ownership of your data. This is the reason why we offer our users the options to delete, and clear your information.</p>
      </div>
    <div className="content-container">
      <h4 className="profile__section-title">Delete my links</h4>
      <p className="profile__section-paragraph">If you’d like to delete of your links from LnkTst you have that option. You won’t be able to retrieve any deleted links once this action has been performed.</p>
      <p className="profile__section-paragraph-small">Note: Once you submit your deletion request, it may take several minutes to fully delete your data.</p>
      <button className="profile__button button-outline margin-s" onClick={this.onRemoveAllLinks}>Remove All Links</button>
    </div>
    <div className="content-container">
        <h4 className="profile__section-title">Delete my account</h4>
        <p className="profile__section-paragraph">If you’d like to delete your content and data from LnkTst, you have the option to delete your account.</p>
        <p className="profile__section-paragraph"><strong className="profile__section-important">IMPORTANT: </strong>You won’t be able to reactivate your account or retrieve anything once it’s deleted.
        Deleting your account includes deletion of your links, and account information.</p>
        <p className="profile__section-paragraph-small">Note: Once you submit your deletion request, it may take several minutes to fully delete your data.</p>
        <button className="profile__button button-outline margin-s" onClick={this.onRemoveUser}>Delete My Account</button>
    </div>
    </div>
    <Footer />
</div>
    )}
  };

const mapStateToProps = (state, props) => ({
expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startRemoveUser: (data) => dispatch(startRemoveUser(data)),
    startRemoveAllExpenses: (data) => dispatch(startRemoveAllExpenses(data)),
    startLogout: () => dispatch(startLogout())
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);