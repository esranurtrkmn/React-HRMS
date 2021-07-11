import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EducationService from "../../services/educationService";
import EducationUpdate from "./EducationUpdate";
import {
    Segment,
    Container,
    Card,
    Table,
    Label,
    Icon,
    Message,
    Button,
} from "semantic-ui-react";



export default function EducationList() {
    let { id } = useParams();

    const [educations, setEducations] = useState([]);
    useEffect(() => {
        let educationService = new EducationService();
        educationService
            .getByResumeId(id)
            .then((result) => setEducations(result.data.data));
    }, [id]);

    return (
        <div>
            <Segment circle="true" vertical>
                <Container>
                    <Message color="teal">
                        <Message.Header
                            textalign="left"
                            style={{
                                textalign: "left",
                                fontSize: "2em",
                                color: "teal",
                                marginTop: "0.75em",
                            }}
                        >
                            {" "}
                            <Icon name="graduation cap" color="teal" /> Eğitim Bilgileri{" "}
                            <Button
                                type="submit"
                                floated="right"
                                animated
                                basic
                                icon="add"
                                color="teal"
                                size="large"
                                style={{ marginBottom: "1em" }}
                            >


                            </Button>


                        </Message.Header>
                        {educations.map((education) => (
                            <Card fluid color="teal" key={education.id}>
                                <Card.Content>
                                    <Card.Meta>
                                        <Table
                                            verticalAlign="middle"
                                            basic="very"
                                            style={{ marginTop: "2em" }}
                                        >
                                            <Table.Body>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Okul adı:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {education.schoolName}
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        {" "}
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Bölüm Adı:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {education.branch}
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        {" "}
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Başlangıç Tarihi:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {education.startYear}
                                                    </Table.Cell>
                                                </Table.Row>

                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        {" "}
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Mezuniyet Tarihi:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {education.endYear}
                                                    </Table.Cell>

                                                </Table.Row>
                                                <Table.Row textAlign="center">
                                                    <Table.Cell>
                                                        {" "}
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            Eğitim Durumu:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {education.graduateStatus}
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Card.Meta>
                                </Card.Content>

                                <Card.Description>

                                    <EducationUpdate education={education} />
                                </Card.Description>
                            </Card>
                        ))}
                    </Message>
                </Container>
            </Segment>
        </div>
    );
}