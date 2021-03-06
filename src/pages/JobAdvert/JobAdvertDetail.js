import React, { useEffect, useState } from "react";
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertDetail() {

    let { id } = useParams();

    const [jobAdvert, setJobAdvert] = useState({});

    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
        jobAdvertService.getJobAdvertById(id).then((result) => setJobAdvert(result.data.data));
    }, [id]);

    
    return (
        <div>

            <Card fluid color={"black"}>
                <Card.Content header="Açıklama" />
                <Card.Content>
                    {jobAdvert.jobDescription}
                </Card.Content>
            </Card>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Table celled color={"black"} stackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>İş veren</Table.HeaderCell>
                                    <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="building" />
                                                Şirket Adı
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{jobAdvert.employer?.companyName}</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="mail" />
                                                Email
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{jobAdvert.employer?.email}</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="phone" />
                                                Telefon
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{jobAdvert.employer?.phoneNumber}</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="world" />
                                                Web Sitesi
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>{jobAdvert.employer?.webAddress}</Table.Cell>
                                </Table.Row>

                                <Table.Row textAlign={"left"}>
                                    <Table.Cell>
                                        <Header as="h4" image>
                                            <Header.Content>
                                                <Icon name="list ul" />
                                                Detaylar
                                            </Header.Content>
                                        </Header>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button animated as={Link} to={`/employers/${jobAdvert.employer?.id}`}>
                                            <Button.Content visible>Detaylara Git</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="arrow right" />
                                            </Button.Content>
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Table celled fixed singleLine color={"black"}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                                    <Table.HeaderCell>Detaylar</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>İş Pozisyonu</Table.Cell>
                                    <Table.Cell>{jobAdvert.jobTitle?.jobTitle}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Şehir</Table.Cell>
                                    <Table.Cell>{jobAdvert.city?.cityName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Çalışma Yeri</Table.Cell>
                                    <Table.Cell>{jobAdvert.workPlace?.placeName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Çalışma Zamanı</Table.Cell>
                                    <Table.Cell>{jobAdvert.workType?.typeName}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Minimum Maaş</Table.Cell>
                                    <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Maksimum Maaş</Table.Cell>
                                    <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Açık Pozisyonlar</Table.Cell>
                                    <Table.Cell>{jobAdvert.numberOfActiveJobs}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Yayınlanma Tarihi</Table.Cell>
                                    <Table.Cell>{jobAdvert.createdAt}</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                                    <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
    
}

