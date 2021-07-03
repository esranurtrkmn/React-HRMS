import React, { useState, useEffect } from "react";
import { Button, Icon, Modal, Container, Segment, Grid, Form, Card, Label, Dropdown, Input } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory, useParams} from "react-router-dom";
import swal from "sweetalert";
import EducationService from "../../services/educationService";
import ResumeService from "../../services/resumeService";


export default function EducationUpdate({ education }) {

    
    let { id } = useParams();    

    const EducationUpdateSchema = Yup.object().shape({
        schoolName: Yup.string().required("Zorunlu"),
        branch: Yup.string().required("Zorunlu"),
        startYear: Yup.number().required("Zorunlu")
    });
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            id:id,
            schoolName: education.schoolName,
            branch: education.branch,
            startYear: education.startYear,
            endYear: education.endYear
            
        },
        validationSchema: EducationUpdateSchema,
        onSubmit: (values) => {
            values.resume={ id:8 };
            let educationService = new EducationService();
            educationService.update(values).then((result) => console.log(result.data.data));
            swal("Başarılı!", "Eğitim bilgisi güncellendi!", "success");
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
                        style={{ marginBottom: "2em" }}
                    >
                        <Button.Content visible>Güncelle</Button.Content>
                        <Button.Content hidden>
                            <Icon name="edit" />
                        </Button.Content>
                    </Button>
                }
            >
                <Modal.Header>Eğitim Bilgisi Güncelleme</Modal.Header>
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
                                                        <Icon name="building" />
                                                        Okul Adı:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Okul Adı..."
                                                        value={formik.values.schoolName}
                                                        name="schoolName"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.schoolName && formik.touched.schoolName && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.schoolName}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="building" />
                                                        Bölüm Adı:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Bölüm Adı..."
                                                        value={formik.values.branch}
                                                        name="branch"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.branch && formik.touched.branch && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.branch}
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
                                                        <Icon name="calendar alternate outline" /> Mezuniyet Tarihi:
                                                    </Label>
                                                    <Input
                                                        type="number"
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Mezuniyet Tarihi..."
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
    );
}