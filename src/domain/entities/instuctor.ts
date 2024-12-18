import { Entity } from "../../core/entities/entity"

interface InstructiorProps {
    name: string
}

export class Instructior extends Entity<InstructiorProps> {
    /**
     * This is an example of Accessor
     */
    get name() {
        return this.props.name
    }
}