import styles from "./SubmissionForm.module.scss";
import React, { useEffect, useState } from "react";
import { TextInput, Checkbox, Button, Loader, Textarea, Input } from "@mantine/core";
import { customButtonStyles, customTextInputStyles, customCheckboxStyles } from "../../helper/MantineStyle/MantineStyle.jsx";
import { IMaskInput } from "react-imask";
import { useForm } from "@mantine/form";
import { sendMessage } from "../../api/telegram.js";
import { useTranslation } from "react-i18next";
import { getGeoLocation } from "../../utils/geolocationUtils.js";
import { Link } from "react-router-dom";
import TelegramIcon from "../../assets/icon/telegram.svg";
import LinkedInIcon from "../../assets/icon/linkedin.svg";
import GithubIcon from "../../assets/icon/github.svg";
import LineForm from "../../assets/icon/line-form.svg";

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
				} else if (value.length < 7 || value.length > 25) {
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
		setIsLoading(true);
		// if (formSubmitted) {
		// 	return; //note If the form has already been submitted, do nothing
		// }
		// const location = await getGeoLocation();
		// const latitude = location.coords.latitude;
		// const longitude = location.coords.longitude;
		// const geoLocationInfo = `Latitude: ${latitude}, Longitude: ${longitude}`;

		const now = new Date();
		const formattedDate = now.toLocaleDateString("ru-RU"); // Форматирует дату
		const formattedTime = now.toLocaleTimeString("ru-RU"); // Форматирует время

		//note

		// console.log("name", name);
		// console.log("email", email);
		// console.log("termsOfService", termsOfService);
		// console.log("userMessage", userMessage);
		// console.log("tel", tel);

		try {
			setIsLoading(true);
			setFormSubmitted(true);
			const message =
				`Name: <code>${name}</code>&#10;` +
				`Phone number: <code>${tel}</code>&#10;` +
				`Mail: <b>${email}</b>&#10;` +
				`Message: <pre>"${userMessage}"</pre>&#10;` +
				`${termsOfService ? "Accept: <code>Згоден</code>" : "Accept: <s>Не згоден</s>"}&#10;` +
				`Date: <code>${formattedDate}</code> Time: <code>${formattedTime}</code>&#10;`;
			// `Location: <code>${geoLocationInfo}</code>`;
			await sendMessage(message);
			setFormSubmitted(true);
		} catch (e) {
			// console.error("Error: ", e);
			console.error("Error sending message:", e);
			form.setFieldError("email", e.message);
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
				<TextInput
					unstyled={true}
					styles={customTextInputStyles}
					label={t("contacts_form.label_1")}
					className={styles.input}
					withAsterisk
					placeholder={t("contacts_form.placeholder_1")}
					{...form.getInputProps("name")}
				/>
				<TextInput
					type="tel"
					name="tel"
					unstyled={true}
					component={IMaskInput}
					mask="+38 (000) 000-00-00"
					styles={customTextInputStyles}
					label={t("contacts_form.label_2")}
					className={styles.input}
					placeholder="+38 (000) 000-00-00"
					withAsterisk
					{...form.getInputProps("tel")}
				/>
				<TextInput
					type="email"
					name="email"
					unstyled={true}
					styles={customTextInputStyles}
					label={t("contacts_form.label_3")}
					className={styles.input}
					withAsterisk
					placeholder="mail@mail.com"
					{...form.getInputProps("email")}
				/>
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
