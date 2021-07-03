import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { browserHistory } from 'react-router';
import CandidateService from '../../services/candidateService';
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment,
    Link
} from "semantic-ui-react";



export default function SignUp() {

    const signUpSchema = Yup.object().shape({
        email: Yup.string()
            .email("Lütfen uygun formatta mail giriniz.")
            .required("Zorunlu"),
        password: Yup.string()
            .nullable()
            .required("Zorunlu"),
        firstName: Yup.string()
            .nullable()
            .required("Zorunlu"),
        lastName: Yup.string()
            .nullable()
            .required("Zorunlu"),
        identityNumber: Yup.number().required("Zorunlu"),
        dateOfBirth: Yup.number().nullable().required("Zorunlu"),

    });

    let candidateService = new CandidateService();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            identityNumber: "",
            dateOfBirth: "",

        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            candidateService.add(values).then((result) => console.log(result.data.message));
        },
    });

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <div>
            <Header as="h3" color="teal" textAlign="left">
                <Image src="https://res.cloudinary.com/dtewzgzgk/image/upload/v1623772439/interim-hr-experts-icon_di1e9w.png" /> Aday Kayıt Portalı
            </Header>
            <Form size="small" onSubmit={formik.handleSubmit}>
                <Segment stacked>
                    <Grid stackable>
                        <Grid.Column width={8}>

                            <Form.Input
                                fluid
                                type="text"
                                placeholder="Ad"
                                error={Boolean(formik.errors.description)}
                                value={formik.values.firstName}
                                name="firstName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.firstName && formik.touched.firstName && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.firstName}
                                </p>
                            )}


                            <Form.Input
                                fluid
                                type="text"
                                placeholder="Soyad"
                                error={Boolean(formik.errors.lastName)}
                                value={formik.values.lastName}
                                name="lastName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.lastName && formik.touched.lastName && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.lastName}
                                </p>
                            )}


                            <Form.Input
                                fluid
                                type="text"
                                placeholder="TC Kimlik numarası"
                                error={Boolean(formik.errors.nationalityId)}
                                value={formik.values.nationalityId}
                                name="identityNumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.identityNumber && formik.touched.identityNumber && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.identityNumber}
                                </p>
                            )}


                        </Grid.Column>
                        <Grid.Column width={8}>

                            <Form.Input
                                fluid
                                type="number"
                                error={Boolean(formik.errors.birthDate)}
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "dateOfBirth")
                                }
                                value={formik.values.birthDate}
                                onBlur={formik.handleBlur}
                                name="dateOfBirth"
                                placeholder="Dogum Tarihi;Örn:1978"

                            />
                            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.dateOfBirth}
                                </p>
                            )}


                            <Form.Input
                                fluid

                                name="email"
                                error={Boolean(formik.errors.email)}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                type="email"
                                placeholder="Email; example@example.com"
                            />
                            {formik.errors.email && formik.touched.email && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.email}
                                </p>
                            )}


                            <Form.Input
                                fluid

                                type="password"
                                error={Boolean(formik.errors.password)}
                                onChange={formik.handleChange}
                                value={formik.values.DueDate}
                                onBlur={formik.handleBlur}
                                name="password"
                                placeholder="Şifre"

                            />
                            {formik.errors.password && formik.touched.password && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.password}
                                </p>
                            )}
                        </Grid.Column>
                    </Grid>

                    <br />
                    <Button color="teal" fluid size="large" icon="registered" type="submit"  >
                        Kayıt Ol
                    </Button>
                </Segment>
            </Form>
        </div>
    )
}
