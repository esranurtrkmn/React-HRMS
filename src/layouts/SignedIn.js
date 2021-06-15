import React from 'react'
import { Dropdown, Menu, Image, Button, Icon } from "semantic-ui-react";

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
        <Image
          avatar
          spaced=""
          right
          src="https://res.cloudinary.com/dtewzgzgk/image/upload/v1622998829/ux9icbe3bt2l7cugu5ek.jpg"
        />
        <Dropdown pointing="top left" text="Esranur Türkmen">
          <Dropdown.Menu>
            <Dropdown.Item text="Hesabım" icon="info" />
            <Dropdown.Item onClick={signOut} text="ÇIKIŞ YAP" icon="out" />
            
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
        </div>
    )
}
