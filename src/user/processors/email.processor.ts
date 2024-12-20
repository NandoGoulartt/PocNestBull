import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('email')
export class EmailProcessor {
  @Process('sendWelcomeEmail')
  async handleSendWelcomeEmail(job: Job<{ email: string }>) {
    console.log(`Sending welcome email to ${job.data.email}`);
  }
}
