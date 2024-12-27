import { faker } from '@faker-js/faker'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  authorId?: UniqueEntityID,
  questionId?: UniqueEntityID,
) {
  const question = Question.create(
    {
      authorId: authorId ?? new UniqueEntityID(),
      title: faker.lorem.sentence(),
      content: faker.lorem.text(),
      ...override,
    },
    questionId ?? new UniqueEntityID(),
  )

  return question
}
