import 'dotenv/config';

import { PrismaClient } from "../generated/prisma/client";
import { departmentData } from './seedData';

const prisma = new PrismaClient();

async function main() {
    
    await prisma.$transaction([
        prisma.employee.deleteMany(),
        prisma.department.deleteMany(),
    ]);
    
    for (const dept of departmentData) {
        await prisma.department.create({
            data: {
                name: dept.name,
                employees: {
                    create: dept.employees,
                },
            },
        });
    }
}

main().then(
    async() => {
        await prisma.$disconnect()
    }
).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
}); 