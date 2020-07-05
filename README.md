# vuerd-real-time-sample

> Real-time simultaneous editing sample

## Start

```bash
$ npm i
$ npm start
```

## interface ERDEngine

```typescript
interface ERDEngine {
  value: string;
  initLoadJson(json: string): void;
  clear(): void;
  setUser(user: User): void;
  sharePull(effect: (commands: Array<Command<CommandType>>) => void): void;
  sharePush(commands: Array<Command<CommandType>>): void;
}
```

| Name         | Type     | Describe                    |
| ------------ | -------- | --------------------------- |
| value        | String   | editor data                 |
| initLoadJson | Function | Do not record and save undo |
| clear        | Function | editor data clear           |
| setUser      | Function | share user name             |
| sharePull    | Function | share pull                  |
| sharePush    | Function | share push                  |
