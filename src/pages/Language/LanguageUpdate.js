import React, { useEffect, useState } from "react";
import {
    Segment,
    Button,
    Container,
    Icon,
    Form,
    Input,
    Label,
    Card,
    Grid,
    Modal,
    Dropdown,
} from "semantic-ui-react";
import LanguageService from "../../services/languageService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import ResumeService from "../../services/resumeService";

export default function LanguageUpdate({ language }) {
    const LanguageUpdateSchema = Yup.object().shape({
        languageName: Yup.string().required("Zorunlu"),
        languageLevel: Yup.number().required("Zorunlu"),
    });

    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            id: language.id,
            languageName: language.languageName,
            languageLevel: language.languageLevel,

        },
        validationSchema: LanguageUpdateSchema,
        onSubmit: (values) => {

            values.resume = { id: 8 };

            let languageService = new LanguageService();

            languageService.update(values).then((result) => console.log(result.data.data));
            swal("Başarılı!", "Dil bilgisi güncellendi!", "success");
            history.push("/resumes/8");
        },
    });

    const [languages, setLanguages] = useState([])

    useEffect(() => {

        let languageService = new LanguageService();
        languageService.getLanguages().then(result => setLanguages(result.data.data))

    }, []);



    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    };

    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <Modal
                onSubmit={formik.handleSubmit}
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
                <Modal.Header>Dil Bilgisi Güncelleme</Modal.Header>
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
                                                        <Icon name="language" /> Dil Adı:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        type="text"
                                                        placeholder="Dil Adı..."
                                                        value={formik.values.languageName}
                                                        name="languageName"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.languageName &&
                                                        formik.touched.languageName && (
                                                            <div className={"ui pointing red basic label"}>
                                                                {formik.errors.languageName}
                                                            </div>
                                                        )}
                                                </Form.Field>

                                                <Form.Field style={{ marginBottom: "1rem" }}>
                                                    <Label basic color="blue">
                                                        <Icon name="time" /> Dil Seviyesi:
                                                    </Label>
                                                    <Input
                                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                                        type="number"
                                                        placeholder="Dil Seviyesi..."
                                                        value={formik.values.languageLevel}
                                                        name="languageLevel"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    ></Input>
                                                    {formik.errors.languageLevel && formik.touched.languageLevel && (
                                                        <div className={"ui pointing red basic label"}>
                                                            {formik.errors.languageLevel}
                                                        </div>
                                                    )}
                                                </Form.Field>
                                                <Modal.Actions >
                                                    <Button

                                                        onClick={() => setOpen(false)}
                                                        animated
                                                        basic
                                                        color="blue"
                                                        size="massive"
                                                        style={{ marginBottom: "0.4em", marginLeft: "19.8em" }}
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
                                                        style={{ marginBottom: "0.4em", marginRigth: "10em" }}
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