import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table, Button, Item } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {

        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    }, [])

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>*</Table.HeaderCell>
                        <Table.HeaderCell>Şirket </Table.HeaderCell>
                        <Table.HeaderCell>Lokasyon</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (

                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell>
                                    <Button as={Link} to={`/jobadverts/${jobAdvert.id}`}
                                        content={jobAdvert.jobTitle.jobTitle}
                                        labelPosition="right"
                                        icon="right arrow"
                                        color="basic orange"

                                    />
                                </Table.Cell>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvert.workPlace.placeName}</Table.Cell>
                                <Table.Cell>{jobAdvert.workType.typeName}</Table.Cell>

                            </Table.Row>
                        ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    );
}

