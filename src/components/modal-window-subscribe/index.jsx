import React from "react";
import { useIntl, IntlContextConsumer } from "gatsby-plugin-intl";
// import { StaticImage } from "gatsby-plugin-image";
import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "../input";

import crossIcon from "../../images/icon-close.svg";

import { submitForm } from "../../utils/submitForm";

import "./index.scss";

const ModalWindowSubscribe = ({ isSubmitted, onClose, onSubmit }) => {
  const intl = useIntl();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(
          50,
          intl.locale === "fr" ? "Le nom doit être plus court que 50 lettres" : "Name should be shorter then 50 letters"
        )
        .required(
          intl.locale === "fr"
            ? "S'il vous plaît remplir les champs obligatoires"
            : "Please fill in the required fields"
        ),
      email: Yup.string()
        .email(intl.locale === "fr" ? "Email invalide" : "Invalid email")
        .required(
          intl.locale === "fr"
            ? "S'il vous plaît remplir les champs obligatoires"
            : "Please fill in the required fields"
        ),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values, { resetForm }) => {
      console.log("Form submitted: " + JSON.stringify(values));

      await submitForm(
        "4efe6c0d-0551-4c0a-a629-b829dcbb6300",
        [
          { name: "firstname", value: values.name },
          { name: "email", value: values.email },
        ],
        Date.now(),
        true
      );

      resetForm();
      onSubmit();
    },
  });

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => {
        return (
          <>
            <div className="subscribe-modal-overlay" onClick={onClose} />
            <div className="subscribe-modal-modal rounded-2xl">
              <img className="close-icon" src={crossIcon} onClick={onClose} />
              {/* {!isSubmitted ? (
                <StaticImage
                  src="../../images/gold-image.png"
                  className="gold-image"
                  quality={100}
                />
              ) : null} */}
              <div className="modal-content px-26">
                <div className="flex">
                  {/* <StaticImage
                    src="../../images/logo-gold.png"
                    className="logo-icon"
                    quality={100}
                  /> */}
              </div>
                {!isSubmitted ? (
                  <>
                    <h2 className={currentLocale === "fr" ? "modal-title-fr" : "modal-title"}>
                      {currentLocale === "fr" ? "Obtenez des informations exclusives" : "Get exclusive insights"}
                    </h2>
                    <h4 className={currentLocale === "fr" ? "modal-subtitle-fr" : "modal-subtitle"}>
                      {currentLocale === "fr" ? "S'inscrire maintenant" : "Sign Up Now"}
                    </h4>
                    <form id="subscribe-form" onSubmit={formik.handleSubmit} className="inputs-wrapper">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isError={formik.errors.name}
                        title={formik.errors.name}
                        value={formik.values.name}
                        placeholder="Ex: John Smith"
                        label={currentLocale === "fr" ? "VOTRE NOM" : "YOUR NAME"}
                        isRoundedInput
                        classNameMain="input-name"
                      />
                      <Input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isError={formik.errors.email}
                        title={formik.errors.email}
                        value={formik.values.email}
                        placeholder="Ex: jonhsmith@domain.com"
                        label={currentLocale === "fr" ? "ADRESSE E-MAIL" : "EMAIL ADDRESS"}
                        isRoundedInput
                      />
                      <div className="button-wrapper  mt-5 w-9/12 mx-auto lg:mr-0 lg:ml-auto">
                        <p className="error-text">{formik.errors.name || formik.errors.email || ""}</p>
                        <button type="submit" form="subscribe-form" className="button">
                          {currentLocale === "fr" ? "Soumettre" : "Submit"}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="success-modal-content">
                    <div>
                      <h2 className={currentLocale === "fr" ? "modal-title-fr" : "modal-title"}>
                        {currentLocale === "fr" ? "Vous êtes maintenant inscrit" : "You’re now signed up"}
                      </h2>
                      <h4 className={currentLocale === "fr" ? "modal-subtitle-fr" : "modal-subtitle"}>
                        {currentLocale === "fr" ? "Pour des aperçus exclusifs" : "For exclusive insights"}
                      </h4>
                    </div>
                    <button className="button button-close mx-auto" onClick={onClose}>
                      {currentLocale === "fr" ? "Fermer" : "Close"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        );
      }}
    </IntlContextConsumer>
  );
};
export default ModalWindowSubscribe;
