'use strict';

/**
 * Генератор уникального индентификатора
 */
function UID() {
  let nodes = ((Date.now()*Math.random())/10000)
    .toString(16)
    .split('.');
  nodes.forEach((item, i, array) => {
    // eslint-disable-next-line no-param-reassign
    array[i] = item.padEnd(8, '0');
  });
  return nodes.join('-');
};

/**
 * Список задач
 */
const TaskList = function(name) {
  this.title = name;
  this.issues = [];
}

/**
 * Вспомогательный метод конструктора для создания группы листов
 */
 TaskList.createGroup = (...args) => {
   let group = [];
   args.map(function(arg) {
    group.push(new TaskList(arg));
    });

   return group;
 }

// Прототип
TaskList.prototype = {
  /**
   * Поиск индекса по id
   */
  _search(id) {
    const i = this.issues.findIndex((issue) => issue.id === id );

    return i;
  },

  /**
   * Получить число задач
   */
  get length() {
    return this.issues.length;
  },

  /**
   * Получить задачу по id
   */
  get(id) {
    return this.issues[this.find(elem => elem.id === id)];
  },

  /**
   * Добавить задачу
   */
  add(name) {
    let id = UID();

    this.issues.push({ id, name });
    
    return id;
  },

  /**
   * Удалить задачу по id
   */
  remove(id) {
    let index = this._search(id);

    return index !== null ? this.issues.splice(index, 1)[0] : false ;
  },

  /**
   * Переместить задачу в другой лист
   */
  moveTo(id, dist) {
    if (this.id === false) {
      return dist.issues.push(this);
    }
    return dist.issues.push(this.remove(id));
  }
}


function linkObjects(group) {
  let objs = group.map( function(obj) {
    let newobj = {};

    for (var propName in obj) {
      if (newobj[propName] !== null) {
        newobj[propName] = document.querySelector(obj[propName]);
      } else {
        new Error(`DOM object ${propName} not found Bad query ${obj[propName]}`);
      }
    }

    return newobj;
  })

 return objs;
}


/**
 * Конструктор котроллера цепочки списков
 */
const ChainController = function(chain) {
  this.model = chain.model;
  this.view = chain.view;
  this._createEvents();
  this._renderView();
}
/**
 * Прототип контроллера цепочки
 */
ChainController.prototype = {
  /**
   * Обход цепочки, итерация по модели
   */
  _forChain(cb) {
    for (var i = 0; i < this.model.length; i++) {
      cb(i, this.model, this.view);
    }
  },

  /**
   * Функция рендеринга, скрыть/отобразить элемент
   */
  
  _rToggle(elem, state) {
    // eslint-disable-next-line no-param-reassign
    elem.style.display = state ? '' : 'none';
  },

  /**
   * Функция рендеринга, отристовка списка задач
   */
  _rList(obj, list) {
    let html = list.reduce((html,elem) => { 
      // eslint-disable-next-line no-param-reassign
      html += `<div class="menu">${elem.name}</div>\n`;

    return html
  }, '');
    // eslint-disable-next-line no-param-reassign
    obj.innerHTML = html;
  },

  /**
   * Функция рендеринга, отрисовка пунктов выбора тэга select
   */
  _rSelect(obj, list) {
    let html = list.reduce((html,elem) => {
      // eslint-disable-next-line no-param-reassign
      html += `<option value="${elem.id}">${elem.name}</option>\n`;
      
      return html
    }, '<option selected value="">select task</option>\n')

    // eslint-disable-next-line no-param-reassign
    obj.innerHTML = html;
  },

  /**
   * Функция рендеринга, отрисовка всего представления
   * должна вызываться после любого изменения в модели
   */
  _renderView() {
    this._forChain((i, model, view) => {
      // Отрисовка списка из модели
      this._rList(view[i].listSection, model[i].issues);

      // Убрать все поля ввода
      this._rToggle(view[i].inputElement, false);

      // Если в данном списке нет задач, убрать кнопку в следующем списке
      if (model[i].length === 0 && model[i+1]) {
        this._rToggle(view[i+1].actionButton, false);
      } else {
        if (model[i+1]) {
          this._rToggle(view[i+1].actionButton, true);
        }
      };
    })
  },

  /**
   * Назначение обработчиков события на элементы интерфейса
   * вызывается при инициализации экземпляра
   */
  _createEvents() {
    this._forChain((i, model, view) => {
      // Add card button
      view[i].actionButton.addEventListener('click', () => {
        this._rToggle(view[i].inputElement, true);
      })

      // потеря фокуса
      view[i].inputElement.addEventListener('blur', () => {
        this._rToggle(view[i].inputElement, false);
      })

      // Изменение данных в полях ввода, если элемент Input
      if (view[i].inputElement.tagName === 'INPUT') {
        view[i].inputElement.addEventListener('blur', () => {
          model[i].add(view[i].inputElement.value);
          // eslint-disable-next-line no-param-reassign
          view[i].inputElement.value = "";
          this._renderView();
        })
      }

      // Рендеринг Списка выбора
      if (view[i].inputElement.tagName === 'SELECT') {
        view[i].actionButton.addEventListener('click', () => {
          this._rSelect(view[i].inputElement, model[i-1].issues);
        })
      }

      // Выбор элемента из списка
      if (view[i].inputElement.tagName === 'SELECT') {
        view[i].inputElement.addEventListener('change', () => {
          model[i-1].moveTo(view[i].inputElement.value, model[i]);
          this._renderView();
        })
      }
    })
  },
}


// Ссылки на объекты цепочки
let queryGroup = [
  {
    listSection: '#BacklogTasks',
    inputElement: '.backlog > input',
    actionButton: '#footBlockBacklog'
  },
  {
    listSection: '#ReadyTasks',
    inputElement: '.ready > select',
    actionButton: '#footBlockReady'
  },
  {
    listSection: '#inprogressTasks',
    inputElement: '.inprogress > select',
    actionButton: '#footBlockProgress'
  },
  {
    listSection: '#finishedTasks',
    inputElement: '.finished > select',
    actionButton: '#footBlockFinished'
  }
];


// Создаем цепочку из модель данных
let Modelchain = TaskList.createGroup(
  'Backlog',
  'Ready',
  'InProgress',
  'Finished'
);

// Создаем контроллер и передаем ему модель с представлением
let kanban = new ChainController({
  model: Modelchain,
  // Получаем объекты DOM по ссылка и передаем как представление
  view: linkObjects(queryGroup)
});
