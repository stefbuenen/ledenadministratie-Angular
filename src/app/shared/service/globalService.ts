import { Injectable } from '@angular/core'

@Injectable()
export class GlobalService {
  globalVar : number = 0;

  init(start: number): void { this.globalVar = start}
}