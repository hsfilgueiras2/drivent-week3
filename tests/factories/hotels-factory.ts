import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      name: faker.lorem.word() + "_hotel",
      image: faker.image.imageUrl(),
    },
  });
}

export async function createHotelWithRooms() {
  return prisma.hotel.create({
    data: {
      name: faker.lorem.word() + "_hotel",
      image: faker.image.imageUrl(),
      Rooms: {
        create: [
          { name: faker.lorem.word(), capacity: faker.datatype.number() }
        ]
      }
    },
    include: {
      Rooms: true
    }
  });
}