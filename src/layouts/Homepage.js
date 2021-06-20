import React from 'react'
import { Container, Grid, GridColumn, GridRow, Image, Button } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import SignUp from '../pages/SignUp';

export default function Homepage() {
    return (
        <div>
            <Container>
                <Grid>
                    <GridRow>
                        <GridColumn floated='medium' width={3}>

                        </GridColumn>
                        <GridColumn floated='left' width={10}>
                        
                            <Image src='https://res.cloudinary.com/dtewzgzgk/image/upload/v1623702310/career-banner_le0g7h.jpg'></Image>

                        </GridColumn>
                        <GridColumn floated='right' width={16}>
                            
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Container>
        </div>
    )
}
