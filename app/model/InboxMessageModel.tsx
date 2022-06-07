import { QuickReplies, User } from "react-native-gifted-chat"
import UserModel from "./UserModel"


export interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user: User
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
    quickReplies?: QuickReplies
}

export class InboxMessageModel implements IMessage {

    _id: string | number
    text: string
    createdAt: number | Date
    user: User
    image?: string | undefined
    video?: string | undefined
    audio?: string | undefined
    system?: boolean | undefined
    sent?: boolean | undefined
    received?: boolean | undefined
    pending?: boolean | undefined
    quickReplies?: QuickReplies | undefined

    constructor(dict: any) {
        this._id = dict.id
        this.text = dict.text
        this.createdAt = dict?.createdAt
        this.user = dict?.user
        this.image = dict?.image
        this.video = dict.video
        this.audio = dict.audio
        this.system = dict.system
    }
}