import styles from "./SubmissionForm.module.scss";
import React, { useState } from "react";
import { TextInput, Checkbox, Button, Loader, Textarea } from "@mantine/core";
import { customButtonStyles, customTextInputStyles, customCheckboxStyles } from "../../helper/MantineStyle/MantineStyle.jsx";
import { useForm } from "@mantine/form";
import { sendMessage } from "../../api/telegram.js";
import { Link } from "react-router-dom";
import TelegramIcon from "../../assets/icon/telegram.svg";
import LinkedInIcon from "../../assets/icon/linkedin.svg";
import GithubIcon from "../../assets/icon/github.svg";
import LineForm from "../../assets/icon/line-form.svg";
import { useTranslation } from "react-i18next";

const SubmissionForm = () => {
	const { t } = useTranslation();
	const [isLoading, setIsLoading] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			name: "",
			tel: "",
			email: "",
			userMessage: "",
			termsOfService: false,
		},

		validate: {
			email: (value) => {
				if (!value) {
					return t("contacts_form.error");
				} else if (!/^\S+@\S+$/.test(value)) {
					return t("contacts_form.error_mail");
				} else {
					return null;
				}
			},
			tel: (value) => {
				if (!value) {
					return t("contacts_form.error");
				} else if (!/^\d+$/.test(value)) {
					return t("contacts_form.error_phone_1");
				} else if (value.length < 8 || value.length > 15) {
					return t("contacts_form.error_phone_2");
				}
			},
			name: (value) => {
				if (!value) {
					return t("contacts_form.error");
				} else if (!/^[a-zA-Zа-яА-ЯёЁґҐїЇіІєЄ']*$/u.test(value)) {
					return t("contacts_form.error_name");
				}
			},
		},
	});

	const handleSubmit = async ({ email, name, tel, userMessage, termsOfService }) => {
		if (formSubmitted) {
			return; //note If the form has already been submitted, do nothing
		}
		console.log("values", email);
		console.log("values", termsOfService);

		try {
			setIsLoading(true);
			setFormSubmitted(true);
			const message = `
			 Ім'я: ${name},
			 Номер телефону: ${tel}, 
			 Пошта: ${email}, 
			 Повідомлення: ${userMessage}, 
			 Згода: ${termsOfService}`;

			await sendMessage(message);
		} catch (e) {
			form.setFieldError("email", e);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className={`${styles.submissionFormWrapper} item-charcoal`}>
			<img src={LineForm} alt="line" className={styles.lineForm} />
			<div className={styles.contactsItem}>
				<Link to={"https://t.me/yanchuk_1"} className={styles.contactIcon}>
					<img src={TelegramIcon} alt="telegram" />
				</Link>
				<Link to={"https://github.com/Vergos1"} className={styles.contactIcon}>
					<img src={GithubIcon} alt="github" />
				</Link>
				<Link to={"https://www.linkedin.com/in/ihor-yanchuk-248a64268/"} className={styles.contactIcon}>
					<img src={LinkedInIcon} alt="linkedin" />
				</Link>
			</div>
			<h5>{t("contacts_form.title")}</h5>
			<p className={styles.description}>{t("contacts_form.description")}</p>
			<form className={styles.submissionForm} onSubmit={form.onSubmit(handleSubmit)}>
				<TextInput styles={customTextInputStyles} unstyled={true} label={t("contacts_form.label_1")} className={styles.input} withAsterisk placeholder={t("contacts_form.placeholder_1")} {...form.getInputProps("name")} />
				<TextInput styles={customTextInputStyles} unstyled={true} label={t("contacts_form.label_2")} className={styles.input} withAsterisk placeholder="0(00) 00 000 000" {...form.getInputProps("tel")} />
				<TextInput styles={customTextInputStyles} unstyled={true} label={t("contacts_form.label_3")} className={styles.input} withAsterisk placeholder="mail@mail.com" {...form.getInputProps("email")} />
				<Textarea unstyled={true} label={t("contacts_form.label_4")} placeholder={t("contacts_form.placeholder_2")} {...form.getInputProps("userMessage")} />

				<Checkbox styles={customCheckboxStyles} mt="md" label={t("contacts_form.label_5")} {...form.getInputProps("termsOfService", { type: "checkbox" })} />
				<div className={styles.footerButton}>
					<Button styles={customButtonStyles} type="submit" disabled={isLoading}>
						{isLoading ? <Loader color="rgba(0, 0, 0, 1)" size="sm" /> : t("contacts_form.submit")}
					</Button>
				</div>
			</form>
		</div>
	);
};
export default SubmissionForm;
{
	/*={isLoading}*/
}
