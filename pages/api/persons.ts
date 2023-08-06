import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Person } from "@/types";

const dataFilePath = path.join(process.cwd(), "/public/PERSON.TXT");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // /api/person method = GET with pagination
  if (req.method === "GET") {
    const data: Person[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    const page = Number(req.query.page) || 1;
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const pageData = data.slice(startIndex, endIndex);
    const totalCount = data.length;
    res.status(200).json({ personsArray: pageData, totalCount });
  }
  // /api/person method = POST
  else if (req.method === "POST") {
    const data: Person[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));
    const { firstName, lastName, nationalCode, education, status }: Person =
      req.body;
    const newPerson: Person = {
      firstName,
      lastName,
      nationalCode,
      education,
      status,
    };
    data.push(newPerson);
    fs.writeFileSync(dataFilePath, JSON.stringify(data));

    res.status(200).json(newPerson);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
