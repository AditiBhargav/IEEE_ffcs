import xlsx from "node-xlsx";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const worksheet = xlsx.parse('./public/Short_listed_candidates.xlsx')[0].data; 
        const headings = worksheet[0];
        const data= worksheet.slice(1)
        return new NextResponse({
            status: 200,
            body: { headings, data }
        })
    } catch (error) {
        return new NextResponse({
            error
        })
    }
}
