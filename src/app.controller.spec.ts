import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World from Root!"', () => {
      expect(appController.getRoot()).toBe('Hello World from Root!');
    });
  });
  describe('hello', () => {
    it('should return "Hello World from Hello"', () => {
      expect(appController.getHello()).toBe('Hello World from Hello');
    });
  });
});
