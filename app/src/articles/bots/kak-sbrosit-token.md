---
title: Как сбросить токен телеграмм бота 
slug: kak-sbrosit-telegram-token 
category: bots 
date: 2021-11-11T11:35:00+10:00
---

## Ищем своего бота

Сперва, необходимо найти своего бота из списка уже созданных раннее в [BotFather](https://t.me/BotFather). Для этого
вводим команду **/mybots** и в списке ботов выбираем нужного.

![](./../static/images/my-bots-command.jpg "Меню выбранного бота")

## Сброс токена

Теперь выбрать раздел **API Token** и далее выбрать **Revoke Current Token**. Таким образом у нас сбросится токен, и вы
увидите сообщение в формате:
> Token for the bot Название бота @moodmachine_support_2_bot has been revoked. New token is:
>
>2137515565:AAHDUJkOS2l3aMjTEtGmRVDnRDQYqoNfTkI

В данном сообщении вместо **@moodmachine_support_2_bot** будет юзернейм вашего бота, а вместо **2137515565:
AAHDUJkOS2l3aMjTEtGmRVDnRDQYqoNfTkI**, ваш новый токен.

![](./../static/images/reset-bot-token.jpg "Меню работы с токеном")
![](./../static/images/reset-bot-token-complite.jpg "Окно удачного сброса токена")

## Настройка бота

Если вам необходима расширенная настройка бота, включая изображение бота, описание и список доступных команд, то
рекомендуем наше [руководство по расширенной настройке бота](/bots/rashirennaya-nastroika-telgram-bota)
