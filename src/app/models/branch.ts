import { Time } from "@angular/common";

export interface Branch {
    branchId:number;
    branchName:string;
    branchAddress:string
    openingHour:Time,
    closingHour:Time
}
