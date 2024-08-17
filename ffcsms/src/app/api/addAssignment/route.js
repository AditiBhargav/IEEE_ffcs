import { NextResponse } from "next/server";
import fs from 'fs';
import { data } from "../../../../dummy data/data";
import { users } from "../../../../dummy data/users";

export async function POST(req){
    const res = await req.json();
    const assigned = res.assignedTo;
    for (let i = 0; i < assigned.length; i++) {
        const user = users.filter(item => item["name"]==assigned[i])[0];
        user.tags.push(res.id);
    }
    fs.writeFileSync("./dummy data/users.js", `export const users = ${JSON.stringify(users, null, 2)}`);
    data.push(res);
    fs.writeFileSync("./dummy data/data.js", `export const data = ${JSON.stringify(data, null, 2)}`);
    return NextResponse.json(data);
}