import { NextResponse } from "next/server";
import dbConnect from '../../../db';
import Project from '../../schemas/Project';

export const GET = async (request) => {
    try {
        await dbConnect();
        const projects = await Project.find();
        return new NextResponse(JSON.stringify(projects), {status: 200});
    } catch (error) {
        return new NextResponse("Error in fetching projects " + error, { status: 500 });
    }
}