import { HttpStatus } from '@nestjs/common';

export class ResponseUtil {
  static success(
    data: any,
    message: string = 'Success',
  ) {
    return { status: 'Success', data, message };
  }

  static error(message: string = 'Error', statusCode: number = 500) {
    return { error: 'Failure', message, statusCode };
  }
}
