import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Button, Dropdown } from 'semantic-ui-react'
import SignUp from '../pages/SignUp'


export default function SignedOut({ signIn }) {

    const options = [
        { text: 'Giriş Yap', value:'/signinemployer' },
        { text: 'Kayıt Ol', value:'/signupemployer' },

    ]

    return (
        <div>
            <Menu.Item>
                <Button color="teal" as={NavLink} to='/signup' style={{ marginLeft: "0.5em" }}>KAYDOL</Button>
                <Button color="teal" onClick={signIn} as={NavLink} to='/login' style={{ marginLeft: "0.5em" }}>GİRİŞ YAP </Button>
                <Button.Group color='orange'>
                    <Button style={{ marginLeft: "0.5em" }}>İŞVEREN</Button>
                    <Dropdown
                        className='button icon'
                        floating
                        options={options}
                        trigger={<></>}
                    />
                </Button.Group>
                <Button basic color="orange" as={NavLink} to='/signinemployer' style={{ marginLeft: "0.5em" }}>İLAN YAYINLA </Button>

            </Menu.Item>




        </div>
    )
}
