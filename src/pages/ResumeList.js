import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Image, Table, Button, Icon } from "semantic-ui-react";
import ResumeService from "../services/resumeService";

export default function ResumeList() {

    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getResumes().then((result) => setResumes(result.data.data));
    }, []);

    return (
        <div>
            <Table celled color={"black"}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Arayan</Table.HeaderCell>
                        <Table.HeaderCell>Teknolojiler</Table.HeaderCell>
                        <Table.HeaderCell>Diller</Table.HeaderCell>
                        <Table.HeaderCell>Github</Table.HeaderCell>
                        <Table.HeaderCell>Linkedin</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {resumes.map((resume) => (
                        <Table.Row key={resume.id}>
                            <Table.Cell>
                                <Header as="h4" image>
                                    <Image src={resume.photos[0].photoUrl} rounded size="mini" />
                                    <Header.Content>
                                        {resume.candidate.firstName + " " + cv.candidate.lastName}
                                        <Header.Subheader>
                                            {resume.candidate.dateOfBirth}
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                {resume.digitalSkills.map((digitalSkill) => (
                                    <p key={digitalSkill.id}>{digitalSkill.skillName}</p>
                                ))}
                            </Table.Cell>

                            <Table.Cell>
                                {resume.languages.map((language) => (
                                    <p key={language.id}>{language.languageName + " Seviye: " + language.languageLevel}</p>
                                ))}
                            </Table.Cell>

                            <Table.Cell>
                                <a href={resume.githubUrl} target={"_blank"} rel="noopener noreferrer">
                                    <Button secondary>
                                        <Icon name="github" /> Github
                                    </Button>
                                </a>
                            </Table.Cell>

                            <Table.Cell>
                                <a href={resume.linkedinUrl} target={"_blank"} rel="noopener noreferrer">
                                    <Button color="linkedin">
                                        <Icon name="linkedin" /> LinkedIn
                                    </Button>
                                </a>
                            </Table.Cell>

                            <Table.Cell>
                                <Button animated as={Link} to={`/resumes/${resume.candidate.id}`}>
                                    <Button.Content visible>Detayları Gör</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name="arrow right" />
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
