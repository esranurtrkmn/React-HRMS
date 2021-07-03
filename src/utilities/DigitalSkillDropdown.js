import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import DigitalSkillService from '../../services/digitalSkillService'

export default function DigitalSkillDropdown({ onChangeEvent, value }) {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        let digitalSkillService = new DigitalSkillService()
        digitalSkillService.getSkills().then(result => setSkills(result.data.data))
    }, [])

    return (
        <div>
            <Form.Select
                placeholder='Yetenek seçiniz'
                label="Yetenek"
                name="digitalSkill"
                search
                options={skills.map((x, index) => {
                    return { text: x.skillName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value={value}
            />
        </div>
    )
}
