import ResumeService from '../services/resumeService';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Image, Table, Header, Button, Icon } from "semantic-ui-react";

export default function ResumeList() {
    let { id } = useParams();

    const [resume, setResume] = useState({});

    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getByCandidateId(id).then((result) => setResume(result.data.data));
    }, [id]);

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        {resume.photos?.map((photo) => (
                            <Image
                                floated="left"
                                size="small"
                                src={photo?.photoUrl}
                                circular
                                key={photo?.id}
                            />
                        ))}

                        <Card.Header>
                            {resume.candidate?.firstName + " " + resume.candidate?.lastName}
                        </Card.Header>
                        
                        <Card.Description>
                            <Table celled color={"black"}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Kullanıcı</Table.HeaderCell>
                                        <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Ad</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.firstName}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Soyad</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.lastName}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Doğum Tarihi</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.dateOfBirth}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>Email</Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.candidate?.email}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>
                                                    <a
                                                        href={resume.githubUrl}
                                                        target={"_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button secondary>
                                                            <Icon name="github" /> Github
                                                        </Button>
                                                    </a>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.githubUrl}</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                        <Table.Cell>
                                            <Header as="h4" image>
                                                <Header.Content>
                                                    <a
                                                        href={resume.linkedinUrl}
                                                        target={"_blank"}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Button color="linkedin">
                                                            <Icon name="linkedin" /> LinkedIn
                                                        </Button>
                                                    </a>
                                                </Header.Content>
                                            </Header>
                                        </Table.Cell>
                                        <Table.Cell>{resume.linkedinUrl}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                </Card>
            </Card.Group>
            <Card fluid>
                <Card.Content header="Hakkımda" />
                <Card.Content description={resume.aboutMe} />
            </Card>

            <Card fluid>
                <Card.Content header="Eğitim Bilgisi" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                            <Table.HeaderCell>Bölüm</Table.HeaderCell>
                            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
                            <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resume.educations?.map((education) => (
                            <Table.Row key={education.id}>
                                <Table.Cell>{education.schoolName}</Table.Cell>
                                <Table.Cell>{education.branch}</Table.Cell>
                                <Table.Cell>{education.startYear}</Table.Cell>
                                <Table.Cell>{education.endYear}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Yabancı Dil Bilgisi" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Dil Adı</Table.HeaderCell>
                            <Table.HeaderCell>Seviye min:1 max:5</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resume.languages?.map((language) => (
                            <Table.Row key={language.id}>
                                <Table.Cell>{language.languageName}</Table.Cell>
                                <Table.Cell>{language.languageLevel}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>

            <Card fluid>
                <Card.Content header="Teknoloji Bilgisi" />
                <Table celled color={"black"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Teknoloji Adı</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resume.digitalSkills?.map((digitalSkill) => (
                            <Table.Row key={digitalSkill.id}>
                                <Table.Cell>{digitalSkill.skillName}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>
        </div>
    )
}

