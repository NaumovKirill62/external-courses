'use strict';

import {ChainController, linkObjects, TaskList, UID} from "./Moduls/control_board.js"

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

let arrow = document.getElementById('arrow');
let profile = document.getElementById('profile');
import {show} from './Moduls/show_menu.js'
arrow.onclick = show;
profile.onclick = show;
