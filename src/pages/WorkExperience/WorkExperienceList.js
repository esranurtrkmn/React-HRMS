import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import WorkExperienceService from '../../services/workExperienceService'
import { Label, Button, Table, Card, Container, Segment, Icon, Message } from 'semantic-ui-react'
import * as moment from 'moment'


export default function WorkExperienceList() {

    let { id } = useParams()
    const [workExperiences, setWorkExperiences] = useState([])
    useEffect(() => {
        let workExperienceService = new WorkExperienceService();
        workExperienceService.getByResumeId(id).then(result => setWorkExperiences(result.data.data))
    }, [id])

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
                            <Icon name="building outline" color="teal" /> İş Deneyimleri {" "}
                            <Button
                                type="submit"
                                floated="right"
                                animated
                                basic
                                color="teal"
                                size="large"
                                style={{ marginBottom: "1em" }}
                            >
                                <Button.Content visible>Ekle</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="check" />
                                </Button.Content>
                            </Button>
                        </Message.Header>
                        {workExperiences.map((workExperience) => (
                            <Card fluid color="teal" key={workExperience.id}>
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
                                                            Şirket adı:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                        textAlign="center"
                                                    >
                                                        {" "}
                                                        {workExperience.companyName}
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
                                                            İş Pozisyonu:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {workExperience.jobTitle}
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
                                                        {workExperience.startYear}
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
                                                            Bitiş Tarihi:
                                                        </Label>
                                                    </Table.Cell>
                                                    <Table.Cell
                                                        style={{
                                                            fontSize: "1.4em",
                                                        }}
                                                    >
                                                        {workExperience.endYear}
                                                    </Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </Card.Meta>
                                </Card.Content>

                                
                            </Card>
                        ))}
                    </Message>
                </Container>
            </Segment>
        </div>
    )
}