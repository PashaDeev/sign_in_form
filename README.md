# Authentification Form

## Summary
Для формирования архитектуры придерживался принципов [FSD](https://feature-sliced.design/ru/)

В качестве фреймворка взял next.js

В данный момент проект выглядит так

```
src
│
└─── app // Кореневая страница
│
└─── widgets // Самостоятельные блоки (форма)
│
└─── features // Функциональные элементы с поведением (инпуты)
│
└─── shared // простейшие ui элементы


```

Сама форма предстваляет из себя виджет, который имеет инпуты в качестве фич и кнопки из shared

Форма доступная и адаптивная

## Entry Point
Корневая страница находится
https://github.com/PashaDeev/sign_in_form/blob/main/src/app/page.tsx

## Installation

```
git clone git@github.com:PashaDeev/sign_in_form.git
```

## Run
Запуск проекта
```
npm run dev
```

Прогон линтера
```
npm run lint
```

## Infra
Для удобства разоработки в проекте также есть:
- editorconfig
- Eslint
- Prettier
- husky
- lint-staged
