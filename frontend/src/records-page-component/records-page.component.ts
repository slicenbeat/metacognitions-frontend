import {Component, Input} from '@angular/core';
import {RecordModel} from "../app/models/record.model";
import {Router} from "@angular/router";

@Component({
  selector: 'records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.less']
})
export class RecordsPageComponent {
  public isCreateRecordComponentVisible: boolean = false;

  public records: RecordModel[] = [
    {
      date: "22.02.22",
      situation: "Меня побила мать",
      thought: "Хочу съехать",
      emotions: [
        {
          emotionCode: "Грусть"
        }
      ]
    },
    {
      date: "27.02.22",
      situation: "Сразу, как только мы заселились, я не успел разложить вещи, как в мою голову ворвался такой поток информации, что ни в сказке сказать, ни топором не вырубить. Во-первых, на судне абсолютно все бумаги - мануалы, журналы, и так далее - все на английском языке. Даже блокнотик, в который записываются отчеты по грузовым операциям - и тот на английском. Бумаги... ооооо... Их тысячи, лежат в сотнях папок, плюс огромное количество документов на компьютерах. Это мне просто разорвало мозг в клочья, потому что с этим объемом информации надо ознакомиться и научиться работать в кротчайшие сроки. Постоянная беготня, постоянная суета, совсем не легко. А также надо как можно быстрее разобраться со всем оборудованием на мостике, а там его мама не горюй. В общем, пока что, свободного времени нет вообще. Абсолютно. Только ночью с 00:00 до 06:00 можно поспать. Но это продлится не долго, буквально 1-2 недели, потом океанский переход до Европы, можно будет уже спокойно стоять вахты, а в свободное время читать книги компании Seatrade, на случай если в Европе придет проверка и будет задавать вопросы.",
      thought: "На первый взгляд судно неплохое, в относительно хорошем состоянии, хотя и 92 года постройки. Экипаж 19 человек - 11 русских и 8 филиппинцев, включая повара. Говорят, периодически становится тоскливо от егошних кулинарных изысков. Филиппинцы здесь рядовой состав, за ними постоянно нужно следить чтобы не натворили чего, среди них только один матрос по-настоящему ответственный и с руками из нужного места, все понимает с полуслова. Остальные - типичные Равшаны да Джамшуты. А еще один из них - гомосек О___о, в добавок к этому он опасный человек, в том плане, что легко впадает в состояние ступора и отключает мозг: был случай как он закрыл одного матроса в трюме, тот орал и тарабанил внутри, это заметил боцман, начал орать на этого персонажа, который, в свою очередь испуганно выпучив глаза, трясущимися руками продолжал закручивать барашки. В итоге боцман его отодвинул и выпустил матроса из трюма. Общение на английском языке, но из-за акцента не всегда с первого раз понятно что филиппинцы говорят, особенно по рации. Напимер, говорит он тебе: Бикарпуль! Бикарпуль! А потом, когда уже поздно, выясняется что это было \"Be careful!\"",
      emotions: [
        {
          emotionCode: "Грусть"
        }
      ]
    }
  ];

  constructor(private router: Router) {
  }

  public _onRecordSaved(event: any): void {
    this.isCreateRecordComponentVisible = false;
  }

  public _showCreateRecordComponent(): void {
    this.isCreateRecordComponentVisible = true;
  }

  public _logOut(): void {
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/');
  }
}
