import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Dropdown } from 'semantic-ui-react'
import SignUp from '../pages/Candidate/SignUp'


export default function SignedOut({ signIn }) {

    const options = [
        { text: 'Giriş Yap', value: '/signinemployer' },
        { text: 'Kayıt Ol', value: '/signupemployer' },

    ]

    return (
        <div>
            <Menu.Item>
                <Button color="teal" as={NavLink} to='/signup' style={{ marginLeft: "0.5em" }}>KAYDOL</Button>
                <Button color="teal" onClick={signIn} as={NavLink} to='/login' style={{ marginLeft: "0.5em" }}>GİRİŞ YAP </Button>

                <Button style={{ backgroundColor: "#FF4500", color:"white", marginLeft: "0.5em" }}>
                    <Dropdown pointing="top right" text="İŞVEREN">
                        <Dropdown.Menu >
                            <Dropdown.Item as={NavLink} to="/signinemployer" text="Giriş Yap" icon="angle double right" />
                            <Dropdown.Item as={NavLink} to="/signupemployer" text="Kayıt Ol" icon="angle double right" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Button>

                <Button basic color="orange" as={NavLink} to='/jobadvertadd' style={{ marginLeft: "0.5em" }}>İLAN YAYINLA </Button>

            </Menu.Item>




        </div>
    )
}
