import React from "react";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Button,
    Input,
    Form,
    GridColumn,
    Container,
    Header,
    Grid,
    Image,
    Segment
} from "semantic-ui-react";
import { success, error, info } from "react-notifications";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import EmployerService from '../services/employerService';


export default function SignUpEmployer() {

    const signUpEmployerSchema = Yup.object().shape({
        email: Yup.string()
            .email("Lütfen uygun formatta mail giriniz")
            .required("Zorunlu"),
        password: Yup.string().nullable().required("Zorunlu"),
        companyName: Yup.string()
            .nullable()
            .required("Zorunlu"),
        webAddress: Yup.string()
            .nullable()
            .required("Zorunlu"),
        phoneNumber: Yup.number().required("Zorunlu"),
    });

    let employerService = new EmployerService();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            companyName: "",
            webAddress: "",
            phoneNumber: "",
        },

        validationSchema: signUpEmployerSchema,
        onSubmit: (values) => {
            employerService
                .add(values)
                .then((result) => console.log(result.data.message));
        },
    });

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    return (
        <div>
            <Header as="h3" color="teal" textAlign="left">
                <Image src="https://res.cloudinary.com/dtewzgzgk/image/upload/v1623772439/interim-hr-experts-icon_di1e9w.png" /> Şirket Kayıt Portalı
            </Header>
            <Form size="small" onSubmit={formik.handleSubmit}>
                <Segment stacked>
                    <Grid stackable>
                        <Grid.Column width={8}>

                            <Form.Input
                                fluid
                                type="text"
                                placeholder="Şirket adı"
                                error={Boolean(formik.errors.description)}
                                value={formik.values.companyName}
                                name="companyName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.companyName && formik.touched.companyName && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.companyName}
                                </p>
                            )}


                            <Form.Input
                                fluid
                                type="text"
                                placeholder="Şirket web adresi"
                                error={Boolean(formik.errors.webAddress)}
                                value={formik.values.webAddress}
                                name="webAddress"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.webAddress && formik.touched.webAddress && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.webAddress}
                                </p>
                            )}


                            <Form.Input
                                fluid
                                type="text"
                                placeholder="Şirket telefon numarası"
                                error={Boolean(formik.errors.phoneNumber)}
                                value={formik.values.phoneNumber}
                                name="phoneNumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                                <p style={{ fontSize: "small", color: "red" }}>
                                    {formik.errors.phoneNumber}
                                </p>
                            )}


                        </Grid.Column>
                        <Grid.Column width={8}>

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
