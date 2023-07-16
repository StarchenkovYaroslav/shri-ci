## Релиз
Для инициации релиза необходимо запустить workflow **Init release** из ветки main.
![2023-07-15_02-30-36](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/d32fd396-7364-4edd-a3f3-9b165c5ebd0a)

По окончании данного workflow от текущего состояния ветки main будет создана новая issue, промежуточная верка вида
```js
`prerelease-v${номер версии}`
```
и PR из данной ветки в ветку **release**. Версия инкрементируется автоматически, основываясь на issue с тегом **release**.
![2023-07-15_03-26-58](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/f2353e62-6b30-407b-936c-a4132ed95638)

В PR запустится три процесса: changelog (запись коммитов с прошлого релиза в issue), тесты, запись результатов тестов в issue.
![2023-07-15_03-28-13](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/238cdbf3-488b-4376-a7cf-bd3bfb3c07bb)

После завершения этих трех процессов, в issue можно увидеть информацию текущего этапа. По ссылкам можно перейти на страницы коммитов или результатов тестов.
![2023-07-15_03-29-03](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/324e470e-647d-49a1-b553-fd661f2bf730)

При внесении правок в рабочую ветку релиза (в примере prerelease-v46) changelog и тесты запустятся еще раз.
![2023-07-15_03-34-49](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/ea2a5a51-b3c6-4990-a986-d48e0263f88e)

В issue можно будет увидеть обновленную информацию.
![2023-07-15_03-36-08](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/ab9a8f28-9851-477d-b4bf-a87676f022ed)

После всех фиксов, обсуждений и принятия решения о том, что текущее состояние достойно деплоя, необходимо сделать merge.
На merge автоматически запустится процесс деплоя.

После деплоя информация в issue обновится (добавятся: дата деплоя, ссылка на артефакт сборки, ссылка на состояние деплоя), issue закроется.
Промежуточная ветка **prerelease** удалится.
![2023-07-15_03-41-17](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/161b8f44-36e8-4cc4-8239-feb1b11ce0df)

Также на коммит, с которого был сделан деплой, повесится тег с номером версии.
![2023-07-15_03-44-32](https://github.com/StarchenkovYaroslav/shri-ci-result/assets/86304001/d13196ea-85e2-4562-9028-66002e0ff9bf)

Релиз закрыт.
