import { Event } from "./event";
import { Category } from "./category";
import { User } from "./user";
import { DayOfWeek } from "./dayOfWeek";
import { Shift } from "./shift";

export interface Entertainer extends User {
    category: Category,
    daysofweekavailable: DayOfWeek[],
    shiftsavailable: Shift[],
    price: number,
    events?: Event[]
}
