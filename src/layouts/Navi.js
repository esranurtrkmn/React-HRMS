import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Container, Menu, Segment, MenuItem, Button, Icon } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedInOut from "./SignedOut";


export default function Navi(props) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const history = useHistory()

    function handlerSignOut(params) {
        setIsAuthenticated(false)
        history.push("/");
    }

    function handlerSignIn(params) {
        setIsAuthenticated(true)

    }
    return (
        <div>

            <Container>
                <Menu fixed>
                    <MenuItem>
                        <MenuItem color="teal" link as={NavLink} to='/'>hrms.net</MenuItem>
                    </MenuItem>
                    <Menu.Item color="teal" link as={NavLink} to='/jobsearch'>İş Ara</Menu.Item>
                    <Menu.Item color="teal" link as={NavLink} to='/jobadverts'>İş İlanları</Menu.Item>
                    <Menu.Item color="teal" >Kariyer Rehberi</Menu.Item>
                    <Menu.Menu position="right">
                        {isAuthenticated ? <SignedIn signOut={handlerSignOut} /> : <SignedInOut signIn={handlerSignIn} />}
                    </Menu.Menu>
                </Menu>
            </Container>



        </div>
    )


}

