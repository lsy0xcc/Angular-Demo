import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCompleteFlag'
})
export class MyCompleteFlagPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let [isText, lang] = args;
    if (!isText) {
      return value ? '✅' : '❎';
    }
    if (lang === 'zh') {
      return value ? '已完成' : '未完成';
    } else {
      return value ? 'Completed' : 'Not completed';
    }
  }

}
