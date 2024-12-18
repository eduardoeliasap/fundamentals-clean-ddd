import { randomUUID } from "node:crypto"

export class UniqueEntityId {
    private _id: string

    get id() {
        return this._id
    }

    // toString() {
    //     return this._id
    // }

    // toValue() {
    //     return this._id
    // }

    constructor (id?: string) {
        this._id = id ?? randomUUID()
    }
}