import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { IntlContextConsumer } from "gatsby-plugin-intl";
import { useFormik } from "formik";
import * as Yup from "yup";

import Modal from "../../../components/Modal";
import Input from "../../../components/input";
import InputPhone from "../../../components/input-phone";
import Textarea from "../../../components/textarea";
import GradientButton from "../../../components/gradientButton";

import { submitForm } from "../../../utils/submitForm";

import "./index.scss";

const ContactUsForm = ({
  nameErrorMessage,
  companyErrorMessage,
  phoneErrorMatchesMessage,
  phoneErrorMinMessage,
  emailErrorMessage,
  commentTextareaLabel,
  commentErrorMessage,
  requiredErrorMessage,
  buttonLabel,
  country,
  className,
}) => {
  const { formEn, formFr } = useStaticQuery(graphql`
    query ContactUsForm {
      formEn: hubspotForm(id: { eq: "84058766-e439-4f28-925f-26d48b583d60" }) {
        guid
        portalId
        name
        submitText
        redirect
        formFieldGroups {
          fields {
            label
            name
            required
            fieldType
            placeholder
          }
        }
      }
      formFr: hubspotForm(id: { eq: "5e61547a-86ca-415b-b4f7-91f334417017" }) {
        guid
        portalId
        name
        submitText
        redirect
        formFieldGroups {
          fields {
            label
            name
            required
            fieldType
            placeholder
          }
        }
      }
    }
  `);
  const [showError, setShowError] = useState(false);
  const [thankModal, setThankModal] = useState(false);

  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  const formik = useFormik({
    initialValues: {
      currentLocale: "",
      name: "",
      company: "",
      phone: "",
      email: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, nameErrorMessage)
        .required(requiredErrorMessage),
      company: Yup.string()
        .max(50, companyErrorMessage)
        .required(requiredErrorMessage),
      phone: Yup.string()
        .matches(phoneRegExp, phoneErrorMatchesMessage)
        .min(12, phoneErrorMinMessage)
        .required(requiredErrorMessage),
      email: Yup.string()
        .email(emailErrorMessage)
        .required(requiredErrorMessage),
      comment: Yup.string()
        .max(500, commentErrorMessage)
        .required(requiredErrorMessage),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form submitted: " + JSON.stringify(values));
      const { guid: id } = values.currentLocale === "fr" ? formFr : formEn;

      let data = await submitForm(
        id,
        [
          { name: "firstname", value: values.name },
          { name: "company", value: values.company },
          { name: "email", value: values.email },
          { name: "phone", value: values.phone },
          { name: "comment", value: values.message },
        ],
        Date.now(),
        true
      );

      resetForm();
      setThankModal(true);
    },
  });

  useEffect(() => {
    if (formik.errors.name) {
      setShowError(formik.errors.name);
    } else if (formik.errors.company) {
      setShowError(formik.errors.company);
    } else if (formik.errors.phone) {
      setShowError(formik.errors.phone);
    } else if (formik.errors.email) {
      setShowError(formik.errors.email);
    } else if (formik.errors.comment) {
      setShowError(formik.errors.comment);
    } else setShowError(false);
  }, [formik.errors]);

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => {
        const { formFieldGroups: fields, guid: id } =
          currentLocale === "fr" ? formFr : formEn;

        const [
          {
            fields: [{ label: nameInputPlaceholder }],
          },
          {
            fields: [{ label: companyInputPlaceholder }],
          },
          {
            fields: [{ label: emailAddressInputPlaceholder }],
          },
          {
            fields: [{ label: phoneInputPlaceholder }],
          },
        ] = fields;

        return (
          <>
            {thankModal && <Modal onClose={() => setThankModal(false)} />}
            <form
              id="contact-form"
              className={`grid gap-x-5 gap-y-8 md:gap-y-6 md:grid-cols-2 w-full ${className}`}
              onSubmit={formik.handleSubmit}
            >
              <input
                type="hidden"
                name="currentLocale"
                value={currentLocale}
                onChange={formik.handleChange}
              />
              <Input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={formik.errors.name && formik.touched.name}
                title={formik.errors.name}
                value={formik.values.name}
                placeholder={nameInputPlaceholder}
              />
              <Input
                id="company"
                name="company"
                type="company"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={formik.errors.company && formik.touched.company}
                title={formik.errors.company}
                value={formik.values.company}
                placeholder={companyInputPlaceholder}
              />
              <InputPhone
                id="phone"
                name="phone"
                onChange={(value, country, e, formattedValue) => {
                  formik.setFieldValue("phone", formattedValue);
                }}
                onBlur={formik.handleBlur}
                country={country}
                isError={formik.errors.phone && formik.touched.phone}
                title={formik.errors.phone}
                value={formik.values.phone}
                placeholder={phoneInputPlaceholder}
              />
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isError={formik.errors.email && formik.touched.email}
                title={formik.errors.email}
                value={formik.values.email}
                placeholder={emailAddressInputPlaceholder}
              />
              <Textarea
                id="comment"
                name="comment"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
                label={commentTextareaLabel}
                isError={formik.errors.comment && formik.touched.comment}
                className="col-span-full"
              />
              <div className="text-error">{showError ? showError : null}</div>

              <GradientButton
                type="submit"
                form="contact-form"
                className="form-btn-w"
              >
                {buttonLabel}
              </GradientButton>
            </form>
          </>
        );
      }}
    </IntlContextConsumer>
  );
};

export default ContactUsForm;
