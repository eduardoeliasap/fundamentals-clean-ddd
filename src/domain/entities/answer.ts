import { Entity } from "../../core/entities/entity"

interface AnswerProps {
    content: string, 
    authorId: string, 
    questionId: string
}

export class Answer extends Entity<AnswerProps> {
    /**
     * This is an example of Accessor
     */
    get content() {
        return this.props.content
    }
}