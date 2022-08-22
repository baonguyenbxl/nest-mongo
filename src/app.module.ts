import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { TechniciansModule } from './technicians/technicians.module';
import { InvoicesModule } from './invoices/invoices.module';
import { LocationsModule } from './locations/locations.module';
import { ApplicationsModule } from './applications/applications.module';
import { PaymentsModule } from './payments/payments.module';
import { RankingsModule } from './rankings/rankings.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/techathome'),
    JobsModule,
    UsersModule,
    CompaniesModule,
    TechniciansModule,
    InvoicesModule,
    LocationsModule,
    ApplicationsModule,
    PaymentsModule,
    RankingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
