import React, { useEffect, useState } from 'react'
import { Button, Modal, Icon, Container, Segment, Card, Dropdown, Input, Label, Form, Grid } from 'semantic-ui-react'

import DigitalSkillService from '../../services/digitalSkillService';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default function DigitalSkillUpdate({ digitalSkill }) {

    const TechnologyUpdateSchema = Yup.object().shape({
        skillName: Yup.string().required("Zorunlu"),

    });
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            id: digitalSkill.id,
            skillName: digitalSkill.skillName,

        },
        validationSchema: TechnologyUpdateSchema,
        onSubmit: (values) => {
            values.resume = { id: 8 };
            let digitalSkillService = new DigitalSkillService();
            digitalSkillService.update(values).then((result) => console.log(result.data.data));
            swal("Başarılı!", "Yetenek bilgisi güncellendi!", "success");
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
                <Modal.Header>Yetenek Güncelleme</Modal.Header>
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
                                                        <Icon name="code" /> Yetenek Adı:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        placeholder="Yetenek Adı..."
                                                        value={formik.values.skillName}
                                                        name="skillName"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.skillName &&
                                                        formik.touched.skillName && (
                                                            <div className={"ui pointing red basic label"}>
                                                                {formik.errors.skillName}
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