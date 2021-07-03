import React, { useState, useEffect } from "react";
import EducationList from "../Education/EducationList";
import LanguageList from "../Language/LanguageList";
import WorkExperienceList from "../WorkExperience/WorkExperienceList";
import DigitalSkillList from "../DigitalSkill/DigitalSkillList";
import PhotoList from "../Photo/PhotoList";
import { useParams } from "react-router-dom";
import * as moment from 'moment';
import ResumeService from "../../services/resumeService";
import ResumeUpdate from "./ResumeUpdate";


import {
    Icon,
    Card,
    Segment,
    Container,
    Grid,
    Message,
    Table,
    Label
} from "semantic-ui-react";


export default function Resume() {
    let { id } = useParams();
    const [resume, setResume] = useState({});

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService
            .getResumeById(id)
            .then((result) => setResume(result.data.data));
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
                            <Icon name="user outline" color="teal" /> İletişim Bilgileri{" "}

                        <ResumeUpdate resume={resume} />
                        </Message.Header>

                        <Card
                            fluid
                            color="teal"
                            circle="true"
                            style={{
                                minHeight: 350,
                                fontSize: "1.2em",
                                fontWeight: "normal",
                                padding: "3.4em 1em",
                            }}
                        >
                            <Grid>
                                <Grid.Column width={6} >
                                    <PhotoList />
                                    {""}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Card.Content style={{ marginTop: ".50em" }}>
                                        <Card.Header
                                            style={{ fontSize: "2em", color: "teal" }}
                                        >
                                            {" "}
                                            {resume.candidate?.firstName} {resume.candidate?.lastName}
                                        </Card.Header>

                                        <Table
                                            verticalAlign="middle"
                                            textAlign="left"
                                            basic="very"
                                            collapsing
                                            style={{ marginTop: "2em" }}
                                        >
                                            <Table.Body>
                                                <Table.Row >
                                                    <Table.Cell>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            <Icon fitted color="teal" name="mail" />{" "}
                                                            Email:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.3em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {resume.candidate?.email}
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
                                                            <Icon
                                                                fitted
                                                                color="teal"
                                                                name="calendar alternate"
                                                            />{" "}
                                                            Doğum Yılı:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.3em",
                                                        }}
                                                    >

                                                        {resume.candidate?.dateOfBirth}
                                                    </Table.Cell>


                                                </Table.Row>
                                                <Table.Row >
                                                    <Table.Cell>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "1.2em",
                                                            }}
                                                        >
                                                            <Icon fitted color="teal" name="pencil" />{" "}
                                                            Özet Bilgi:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.3em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {resume.aboutMe}
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row >
                                                    <Table.Cell>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "0.9em",
                                                            }}
                                                        >
                                                            <Icon fitted color="teal" name="linkedin in" />{" "}

                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "0.9em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {resume.githubUrl}
                                                    </Table.Cell>

                                                </Table.Row>
                                                <Table.Row >
                                                    <Table.Cell>
                                                        <Label
                                                            basic
                                                            color="teal"
                                                            pointing="right"
                                                            style={{
                                                                fontSize: "0.9em",
                                                            }}
                                                        >
                                                            <Icon fitted color="teal" name="github" />{" "}

                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "0.9em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {resume.githubUrl}
                                                    </Table.Cell>
                                                </Table.Row>

                                            </Table.Body>
                                        </Table>
                                    </Card.Content>
                                </Grid.Column>
                            </Grid>
                        </Card>
                    </Message>
                </Container>
            </Segment>


            <EducationList></EducationList>

            <LanguageList></LanguageList>

            <WorkExperienceList></WorkExperienceList>

            <DigitalSkillList></DigitalSkillList>



        </div>
    );
}