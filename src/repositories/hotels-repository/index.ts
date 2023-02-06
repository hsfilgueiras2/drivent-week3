import { prisma } from "@/config";

async function findAll() {
  const query = await prisma.hotel.findMany();
  return query
}

async function findById(id: number) {
  return await prisma.hotel.findUnique({
    where: { id },
    include: { Rooms: true }
  });
}

const hotelsRepository = {
  findAll,
  findById
};

export default hotelsRepository;