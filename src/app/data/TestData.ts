import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},

  ];
  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85d1b2'},
    {id: 3, title: 'Высокий', color: '#f1828d'},
    {id: 4, title: 'Очень срочно!', color: '#f1128d'},
  ];
  static tasks: Task[] = [
    {
      id: 1,
      title: 'Заправить машину',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2022-12-08'),

    },
    {
      id: 2,
      title: 'Отправить отчёт',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2022-12-09'),

    },
    {
      id: 3,
      title: 'Полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1],

    },
    {
      id: 4,
      title: 'Сходить в кафе с друзьями',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2022-12-11'),

    },
    {
      id: 5,
      title: 'Найти учебник по js',
      completed: false,
      category: TestData.categories[2],

    },
    {
      id: 6,
      title: 'Сходить на семинар',
      priority: TestData.priorities [1],
      completed: false,
      category: TestData.categories[2],
      date: new Date('2022-12-12'),
    },
    {
      id: 7,
      title: 'Приготовить ужин',
      completed: false,
      category: TestData.categories[5],
    },
    {
      id: 8,
      title: 'Купить билеты в кино',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[3],
    },
    {
      id: 9,
      title: 'Пожать 120 кг',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[4],
      date: new Date('2022-11-30'),
    },
    {
      id: 10,
      title: 'Сходить на прогулку',
      category: TestData.categories[3],
      completed: true,
    },
    {
      id: 11,
      title: 'Позвонить маме',
      completed: true,
    },
    {
      id: 12,
      title: 'Купить продукты на неделю',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2022-11-30'),
    },
    {
      id: 13,
      title: 'Повторить урок по Java',
      priority: TestData.priorities[2],
      completed: true,
    },
    {
      id: 14,
      title: 'Помыть машину',
      category: TestData.categories[9],
      completed: true,
    },
    {
      id: 15,
      title: 'Сдать анализы',
      priority: TestData.priorities[3],
      completed: false,
      category: TestData.categories[8],
      date: new Date('2022-12-15'),
    },
    {
      id: 16,
      title: 'Составить резюме',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[0],
    },
    {
      id: 17,
      title: 'Сдать в ремонт телефон',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[7],
    },
    {
      id: 18,
      title: 'Навестить маму',
      category: TestData.categories[1],
      completed: true,
    },
    {
      id: 19,
      title: 'Снять деньги в банкомате',
      category: TestData.categories[6],
      completed: false,
    },
    {
      id: 20,
      title: 'Купить корм коту',
      category: TestData.categories[1],
      completed: true
    }

  ];
}
