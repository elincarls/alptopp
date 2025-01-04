import { NextResponse } from "next/server";
import dbConnect from '../../../../db';
import Project from '../../../schemas/Project';

export const GET = async (request, context) => {
    try {
        const { slug } = await context.params;
        await dbConnect();
        const project = await Project.findOne({ slug });
        return new NextResponse(JSON.stringify(project), { status: 200 });
    } catch (error) {
        return new NextResponse("Error in fetching project " + error, { status: 500 });
    }
}
