import { Entity } from "../../core/entities/entity"

interface StudentProps {
    name: string
}

export class Student extends Entity<StudentProps> {
    /**
     * This is an example of Accessor
     */
    get name() {
        return this.props.name
    }
}