import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button } from 'semantic-ui-react'
import SignUp from '../pages/SignUp'


export default function SignedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <Button color="teal" as={NavLink} to='/signup' style={{ marginLeft: "0.5em" }}>KAYDOL</Button>
                <Button color="teal" onClick={signIn} as={NavLink} to='/login' style={{ marginLeft: "0.5em" }}>GİRİŞ YAP </Button>
                <Button color="orange" as={NavLink} to='/signupemployer' style={{ marginLeft: "0.5em" }}>İŞVEREN</Button>
                
            </Menu.Item>




        </div>
    )
}
