import type { NextApiRequest, NextApiResponse } from "next";
import { findByZip } from "../../../../../mongoose/weather/service";
import dbConnect from "../../../../../middleware/db-connect";
dbConnect();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<NextApiResponse<WeatherDetailType> | void> {
    // console.log(req.query);
    const data = await findByZip(req.query.zipcode as string);
    return res.status(200).json(data);
}