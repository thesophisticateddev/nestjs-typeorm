import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export class DatabaseConfig {
  static createTypeOrmOptions(config: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: config.get<string>('POSTGRES_HOST'),
      port: config.get<number>('POSTGRES_PORT'),
      username: config.get<string>('POSTGRES_USER'),
      password: config.get<string>('POSTGRES_PASSWORD'),
      database: config.get<string>('POSTGRES_DATABASE'),
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
      migrationsTableName: 'migrations',
      // migrations: ['src/migrations/*{.ts,.js}'],
      // synchronize: true,
      autoLoadEntities: true,
      logging: true,
    };
  }
}
