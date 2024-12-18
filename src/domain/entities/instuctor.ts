import { randomUUID } from "node:crypto"

interface InstructiorProps {
    name: string
}

export class Instructior {
    public id: string
    public name: string

    constructor(props: InstructiorProps, id?: string) {
        this.name = props.name
        this.id = id ?? randomUUID()
    }
}