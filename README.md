# Destructuring
---
[![Build status](https://ci.appveyor.com/api/projects/status/au7tu7dnujtguo67?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-destructuring)

### Описание

Задача - получение id, иконки и описания из объекта, типа:
```javascript
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]	
}
```

Но для некоторых (ещё недоступных) атак описание является засекреченным и не отображается:

```javascript
{
  id: 9,
  name: 'Нокаутирующий удар',
  icon: 'http://...'
}
```

Реализована функция с аргументом-деструктором, которая извлекает массив с нужными полями (`id`, `name`, `description`, `icon`) из объекта, а если значения для поля `description` нет - устанавливает default'ное значение в 'Описание недоступно'. Функция возвращает извлечённый массив из объектов с четыремя полями.

---

Обеспечено покрытие тестами.
