import "./contacts.scss";
import React from "react";
import PageTitle from "../UI/PageTitle/PageTitle.jsx";
import SubmissionForm from "../submissionForm/SubmissionForm.jsx";

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container container-contacts">
        <PageTitle
          title="page_title.contacts_title"
          subtitle="page_title.contacts_subtitle"
          secondClass="contacts"
        />
        <SubmissionForm />
      </div>
    </section>
  );
};
export default Contacts;
