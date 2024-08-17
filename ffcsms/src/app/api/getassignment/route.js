import { NextResponse } from "next/server";
import { data } from "../../../../dummy data/data";

export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const slug = searchParams.get("slug");  
    const assignment = data.find((a) => a.slug == slug);
    return new NextResponse(JSON.stringify(assignment), { status: 200 });
}