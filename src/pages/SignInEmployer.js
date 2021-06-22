import React from 'react'
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Form, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'

export default function SignInEmployer() {

    const signInSchema = Yup.object().shape({
        email: Yup.string()
            .email("Lütfen uygun formatta mail giriniz.")
            .required("Zorunlu"),
        password: Yup.string()
            .nullable()
            .required("Zorunlu"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });



    return (
        <div>
            <Header as="h3" color="teal" textAlign="left">
                <Image src="https://res.cloudinary.com/dtewzgzgk/image/upload/v1623772439/interim-hr-experts-icon_di1e9w.png" /> İşveren Giriş Portalı
            </Header>
            <Form size="large" onSubmit={formik.handleSubmit}>
                <Segment stacked >

                    <Form.Input
                        fluid
                        placeholder="Email; example@example.com"
                        error={Boolean(formik.errors.email)}
                        value={formik.values.email}
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.Email && formik.touched.Email && (
                        <p style={{ fontSize: "small", color: "red" }}>
                            {formik.errors.Email}
                        </p>
                    )}

                    <Form.Input
                        fluid
                        placeholder="Şifre"
                        type="password"
                        error={Boolean(formik.errors.password)}
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p style={{ fontSize: "small", color: "red" }}>
                            {formik.errors.password}
                        </p>
                    )}
                    <Form.Field>
                        <Form.Field>
                            <Checkbox
                                style={{
                                    float: "right",
                                    padding: "20px",
                                }}
                                defaultChecked
                                label="Beni hatırla"
                            />
                        </Form.Field>
                        <Button color="teal" fluid size="large" >
                            Giriş Yap
                        </Button>

                    </Form.Field>
                </Segment>
            </Form>
            <Message>
                <p>Henüz üye değil misiniz?</p>
                <p><Link to={"/signupemployer"}>İşveren Kaydı Oluştur</Link></p>
            </Message>
        </div>
    )
}
