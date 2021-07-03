import React, { useState, useEffect } from "react";
import {
    Button,
    Modal,
    Icon,
    Label,
    Form,
    Input,
    Segment,
    Container,
    Card,
    Grid,
    Dropdown,
} from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory,useParams } from "react-router-dom";
import swal from "sweetalert";
import ResumeService from "../../services/resumeService";
import CandidateService from "../../services/candidateService";

export default function ResumeUpdate({ resume }) {

    let resumeService = new ResumeService()
    let { id } = useParams();

    const ResumeUpdateSchema = Yup.object().shape({

        aboutMe: Yup.string().required("Zorunlu"),
        linkedinUrl: Yup.string().required("Zorunlu"),
        githubUrl: Yup.string().required("Zorunlu")


    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {

            id:id,
            aboutMe: resume.aboutMe,
            linkedinUrl: resume.linkedinUrl,
            githubUrl: resume.githubUrl

        },
        validationSchema: ResumeUpdateSchema,
        onSubmit: (values) => {
            values.candidate = { id: 3 };
            let resumeService = new ResumeService();
            resumeService
                .update(values)
                .then((result) => console.log(result.data.data));
            swal("Başarılı!", "İletişim bilgisi güncellendi!", "success");
            history.push("/resumes/8");
        },
    });


    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Button
                        type="submit"
                        animated
                        basic
                        color="orange"
                        size="large"
                        style={{ marginLeft: "60em" }}
                    >
                        <Button.Content visible>Güncelle</Button.Content>
                        <Button.Content hidden>
                            <Icon name="edit" />
                        </Button.Content>
                    </Button>
                }
            >
                <Modal.Header>İletişim Bilgisi Güncelleme</Modal.Header>
                <Modal.Description>
                    <Container>
                        <Segment circle="true" vertical style={{ padding: "3em 0em" }}>
                            <Grid>
                                <Grid.Column width={1}></Grid.Column>
                                <Grid.Column width={14}>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Form onSubmit={formik.handleSubmit}>


                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="pencil" /> Kişisel özet:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Kişisel özet..."
                                                        value={formik.values.aboutMe}
                                                        name="aboutMe"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.aboutMe && formik.touched.aboutMe && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.aboutMe}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="linkedin" /> Linkedin:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Linkedin..."
                                                        value={formik.values.linkedinUrl}
                                                        name="linkedinUrl"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.linkedinUrl && formik.touched.linkedinUrl && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.linkedinUrl}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="github" /> Github:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Github..."
                                                        value={formik.values.githubUrl}
                                                        name="githubUrl"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.githubUrl && formik.touched.githubUrl && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.githubUrl}
                                                        </div>
                                                    )}
                                                </Form.Field>

                                                <Modal.Actions>
                                                    <Button
                                                        onClick={() => setOpen(false)}
                                                        animated
                                                        basic
                                                        color="blue"
                                                        size="massive"
                                                        style={{
                                                            marginBottom: "0.4em",
                                                            marginLeft: "19.8em",
                                                        }}
                                                    >
                                                        <Button.Content visible>Vazgeç</Button.Content>
                                                        <Button.Content hidden>
                                                            <Icon name="delete" />
                                                        </Button.Content>
                                                    </Button>
                                                    <Button
                                                        type="submit"
                                                        animated
                                                        basic
                                                        color="blue"
                                                        size="massive"
                                                        style={{
                                                            marginBottom: "0.4em",
                                                            marginRigth: "19.8em",
                                                        }}
                                                    >
                                                        <Button.Content visible>Kaydet</Button.Content>
                                                        <Button.Content hidden>
                                                            <Icon name="check" />
                                                        </Button.Content>
                                                    </Button>
                                                </Modal.Actions>
                                            </Form>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Container>
                </Modal.Description>
            </Modal>
        </div>
    );
}