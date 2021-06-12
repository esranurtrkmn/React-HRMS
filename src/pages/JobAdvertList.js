import React, { useState,useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(()=>{

        let jobAdvertService=new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data))
    },[])

        return(
            <div>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Şirket adı</Table.HeaderCell>
                            <Table.HeaderCell>İş pozisyonu</Table.HeaderCell>
                            <Table.HeaderCell>İş ilanı açıklaması</Table.HeaderCell>
                            <Table.HeaderCell>Lokasyon</Table.HeaderCell>
                            <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
                            
                           
                            
                        </Table.Row>
                    </Table.Header>


                    <Table.Body>

                        {
                            jobAdverts.map((jobAdvert) => (
                                <Table.Row key={jobAdvert.id}>
                                    <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                    <Table.Cell>{jobAdvert.jobTitle.jobTitle}</Table.Cell>
                                    <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
                                    <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                                    <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
                                    
                                </Table.Row>
                            ))
                        }

                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        );
    }

