import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function start() {
  const PORT = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
