import React, { useState, useEffect } from 'react'
import { Button, Modal, Icon, Form, Input, Label, Segment, Container, Grid, Dropdown, Card } from 'semantic-ui-react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import WorkExperienceService from '../../services/workExperienceService';



export default function JobExperienceUpdate({ workExperience }) {

    const WorkExperienceUpdateSchema = Yup.object().shape({
        companyName: Yup.string().required("Zorunlu"),
        jobTitle: Yup.string().required("Zorunlu"),
        startYear: Yup.date().required("Zorunlu"),
        endYear: Yup.date().required("Zorunlu")
    });
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            id: workExperience.id,
            companyName: workExperience.companyName,
            jobTitle: workExperience.jobTitle,
            startYear: workExperience.startYear,
            endYear: workExperience.endYear
            
        },
        validationSchema: WorkExperienceUpdateSchema,
        onSubmit: (values) => {

            values.resume = { id: 8 };
            let workExperienceService = new WorkExperienceService();
            workExperienceService.update(values).then((result) => console.log(result.data.data));
            swal("Başarılı!", "İş deneyimi güncellendi!", "success");
            history.push("/resumes/8");
        },
    });


    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };


    const [open, setOpen] = React.useState(false)
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
                        style={{ marginBottom: "2em" }}
                    >
                        <Button.Content visible>Güncelle</Button.Content>
                        <Button.Content hidden>
                            <Icon name="edit" />
                        </Button.Content>
                    </Button>
                }
            >
                <Modal.Header>İş Deneyimi Güncelleme</Modal.Header>
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
                                                        <Icon name="building" />Şirket Adı:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Şirket Adı..."
                                                        value={formik.values.companyName}
                                                        name="companyName"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.companyName && formik.touched.companyName && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.companyName}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="user" /> Pozisyon Adı:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Pozisyon Adı..."
                                                        value={formik.values.jobTitle}
                                                        name="jobTitle"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.jobTitle && formik.touched.jobTitle && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.jobTitle}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="calendar alternate outline" /> Başlangıç Tarihi:
                                                    </Label>
                                                    <Input
                                                        type="number"
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Başlangıç Tarihi..."
                                                        value={formik.values.startYear}
                                                        name="startYear"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.startYear && formik.touched.startYear && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.startYear}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="calendar alternate outline" /> Bitiş Tarihi:
                                                    </Label>
                                                    <Input
                                                        type="number"
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Bitiş Tarihi..."
                                                        value={formik.values.endYear}
                                                        name="endYear"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.endYear && formik.touched.endYear && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.endYear}
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
                                                            marginRigth: "10em",
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
    )
}