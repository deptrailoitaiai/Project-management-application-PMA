import { Inject, Injectable } from '@nestjs/common';
import { SchedulerRegistry, Timeout } from '@nestjs/schedule';

@Injectable()
export class AppService {
    constructor(
    ) {}

    @Timeout(500)
    test() {
        return console.log();
    }
}