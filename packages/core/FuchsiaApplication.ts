import express, { Application } from 'express';
import { Controller } from '@fuchsiajs/common';
import { ConfigLoader } from './Config.Loader';
import { IConfigOptions } from './interfaces';

interface IFuchsiaApplicationModules {
  controllers: [Controller];
}

export class FuchsiaApplication {
  app: Application;

  controllers: [Controller];
  constructor(
    modules: IFuchsiaApplicationModules,
    public options: Partial<IConfigOptions>,
    public port: number = 8000
  ) {
    this.app = express();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.controllers = modules.controllers;
    this.loadOptions();
    this.handle();
  }

  public get settings() {
    return this.app.settings;
  }

  private async loadOptions(): Promise<void> {
    ConfigLoader.load(this.app, this.options);
  }

  private async handle(): Promise<void> {
    this.controllers.forEach((c) => {
      this.app.use(c.path, c.router);
    });
  }

  public async listen(): Promise<void> {
    this.app.listen(this.port, () => {
      console.log('listening on port ' + this.port);
    });
  }
}
