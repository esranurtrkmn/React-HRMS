import Navi from './Navi'
import React, { Component } from 'react'
import { Button, Dropdown, Menu,Grid } from 'semantic-ui-react'
import JobAdvertList from '../pages/JobAdvertList'
import CandidateList from '../pages/CandidateList'
import CityList from '../pages/CityList'

export default function () {
    return (
        <div>
            <Grid style={{ margin: '1em 1em' }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Menu pointing vertical>
                            <Menu.Item header name='Admin' />
                            <Menu.Item as='a' name="JobAdverts" />
                            <Menu.Item as='a' name="Candidates" />
                            <Menu.Item as='a' name="Cities" />

                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        
                        <CityList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
