import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

async function start() {
  const PORT = process.env.PORT || 3000

  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('NestJS Sequelize JWT Roles')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('skxrx')
    .build()
  const documentation = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, documentation)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
