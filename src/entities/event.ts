export interface Event {
    name: string,
    description: string,
    datetime: string,
    duration: number,
    place: string,
    isBlocker: boolean,
    isOwner: boolean
}
