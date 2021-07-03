import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import WorkTypeService from '../../services/workTypeService'

export default function WorkTypeDropdown({ onChangeEvent, value }) {

    const [workType, setWorkType] = useState([])

    useEffect(() => {
        let workTypeService = new WorkTypeService()
        workTypeService.getWorkTypes().then(result => setWorkType(result.data.data))
    }, [])

    return (
        <div>
            <Form.Select
                placeholder='Çalışma Tipi'
                label="Çalışma Tipi"
                name="workType"
                search
                options={workType.map((x, index) => {
                    return { text: x.typeName, key: x.index, value: x.id }
                })}
                onChange={onChangeEvent}
                value={value}
            />
        </div>
    )
}
