# Встройка библиотеки

Начните с [сборки приложения](../docs/build.md)

Добавьте к проекту библиотку

```sh
npm install react-1cv8-web-app
```

Используйте импорт

```ts
import { V8WebAppProvider, useV8FormAttribute, V8Proxy } from 'react-1cv8-web-app'
```

Оберните свой компонент в компонет `V8WebAppProvider`

```ts
return (
    <V8WebAppProvider>
      <div>Ваш код</div>
    </V8WebAppProvider>
  )
```

Используйте `V8Proxy.fetch` для запросов в 1С и `useV8FormAttribute` дли синхронизации с реквизитами формы

Смотрите пример в [App.tx](../demo/simple/src/App.tsx)

Со стороны 1С смотрите пример в [Обработке ТестHTML](../demo-1c/lib/DataProcessors/ТестHTML/Forms/Форма/Ext/Form/Module.bsl)
