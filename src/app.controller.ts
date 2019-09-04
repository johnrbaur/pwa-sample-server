import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { sendNotification, setVapidDetails } from 'web-push';

const publicKey = 'BHszwbJVa33zuY84nInZiqWed7WTLUWj3waQLVCM8BV329c2Zj34LJ69YCZtka6-T6639PiMeX05icXTfUBmxE0';
const privateKey = 'vokK6HceqI2kgncAMDeZhc_xw3BZ4Kmz2v03uyc7pAY';

@Controller()
export class AppController {
  constructor() {
    setVapidDetails('mailto:john.baur@oasisdigital.com', publicKey, privateKey);
  }

  @Post('subscribe')
  subscribe(@Req() req: Request, @Res() res: Response) {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({
      title: 'push',
      body: 'Hello, John!',
      icon: 'http://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png',
    });

    sendNotification(subscription, payload).catch(err => console.error(err));
  }
}
