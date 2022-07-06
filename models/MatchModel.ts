class MatchModel {
    id: string
    startTime: Date
    endTime: Date
    location: string
    title: string
    description: string
    joinedMember: UserModel[]
    sport: SportModel


    constructor(id: string, title: string, description: string, location: string, startTime: Date, endTime: Date, sport: SportModel, joinedMember: UserModel[]) {
        this.id = id
        this.title = title
        this.description = description
        this.startTime = startTime
        this.endTime = endTime
        this.location = location
        this.sport = sport
        this.joinedMember = joinedMember
    }

}