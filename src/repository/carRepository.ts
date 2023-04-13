import prisma from "../config/database";

async function getCars() {
  return await prisma.cars.findMany();
}

async function getCar(id: number) {
  return await prisma.cars.findUnique({
    where: {
      id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return await prisma.cars.findFirst({
    where: {
      licensePlate
    }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  const data = {model, licensePlate, year, color};
  await prisma.cars.create({
      data
  })
}


async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {
      id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;