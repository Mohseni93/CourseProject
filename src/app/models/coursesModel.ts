export interface Courses {
    id?:number | undefined,
    title?:string,
    image?:string,
    time?:string,
    lecture?:string,
    newPrice ?: string,
    oldPrice ?: string,
    rating ?: number,
    selected?: boolean
}