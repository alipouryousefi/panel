import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Person } from "@/types";

const dataFilePath = path.join(process.cwd(), "users.json");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Read user data from the JSON file
    const data: Person[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

    // Respond with the user data
    res.status(200).json(data);
  } else if (req.method === "POST") {
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
