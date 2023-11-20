import "./contactsSection.scss";
import React from "react";
import PageTitle from "../UI/PageTitle/PageTitle.jsx";
import SubmissionForm from "../../components/SubmissionForm/SubmissionForm.jsx";

const ContactsSection = () => {
	return (
		<section className="contacts">
			<div className="container container-contacts" id="contacts">
				<PageTitle title="page_title.contacts_title" subtitle="page_title.contacts_subtitle" secondClass="contacts" />
				<SubmissionForm />
			</div>
		</section>
	);
};
export default ContactsSection;
