import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt'
import * as dotenv from 'dotenv' // 1. Импортируйте dotenv

dotenv.config();

// 2. Инициализируем клиент без параметров (он сам возьмет DATABASE_URL из process.env)
const prisma = new PrismaClient();


async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

await prisma.user.upsert({
    where: { email: 'admin@admin.com' },
    update: {},
    create: {
      email: 'admin@admin.com',
      login: 'SuperAdmin', 
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  await prisma.waterBody.upsert({
    where: { name: 'Озеро Пестрое' },
    update: {},
    create: {
      name: 'Озеро Пестрое',
      type: 'Озеро',
      location: 'СКО',
      latitude: 54.83,
      longitude: 69.15,
      description: 'Городское озеро',
    }
  })

  console.log('✅ База успешно обновлена!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })