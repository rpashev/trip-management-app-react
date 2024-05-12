import { LanguageMapType } from './en';

export const bg: LanguageMapType = Object.freeze({
  linkTitles: {
    Login: 'Вход',
    Home: 'Начало',
    ['Sign Up']: 'Регистрация',
    Logout: 'Изход',
    Map: 'Карта',
    Settings: 'Настройки',
  },
  pages: {
    login: {
      title: 'Вход',
      email: 'Имейл',
      password: 'Парола',
      errorEmail: 'Моля, въведете валиден имейл!',
      errorPassword: 'Паролата трябва да съдържа поне 6 символа!',
      submitBtn: 'Изпращане',
    },
    signUp: {
      title: 'Регистрация',
      email: 'Имейл',
      password: 'Парола',
      errorEmail: 'Моля, въведете валиден имейл!',
      errorPassword: 'Паролата трябва да съдържа поне 6 символа!',
      repPassword: 'Повтори паролата',
      errorRepPassword: 'Паролите трябва да съвпадат!',
      submitBtn: 'Изпращане',
    },
    home: {
      titleTracked: 'Следени местоположения',
      searchPlaceholder: 'Търсене на местоположение...',
      noResultsLabel: 'Няма намерени резултати!',
      noTrackedLocationsLabel: 'Все още няма следени местоположения.',
    },
    settings: {
      title: 'Настройки',
      units: 'Империални единици',
      lang: 'Език',
      darMode: 'Тъмен режим',
      detectBtn: 'Откриване на местоположение',
      changeLoc: 'Промяна на местоположението',
    },
    map: {
      legTemp: 'Температура',
      legWind: 'Скорост на вятъра',
      legPrecip: 'Валежи',
      legPressure: 'Налягане',
      legClouds: 'Облаци в',
      filtClouds: 'Облаци',
      filtWind: 'Вятър',
      checkbox: 'Показване на следените местоположения',
    },
  },
  locCard: {
    details: 'Детайли',
    feelsLike: 'Усеща се като',
    wind: 'Вятър',
    humidity: 'Влажност',
    sunrise: 'Изгрев на слънцето',
    sunset: 'Залез на слънцето',
    addTooltip: 'Добави към следените местоположения',
    removeTooltip: 'Премахни от следените местоположения',
    closePopup: 'Затвори прозореца',
    viewDet: 'Преглед на детайлите',
  },
  detDialog: {
    title: 'Времето за',
    feelsLike: 'Усеща се като',
    wind: 'Вятър',
    precipitation: 'Валежи',
    maxTemp: 'Максимална температура',
    minTemp: 'Минимална температура',
    avgTemp: 'Средна температура',
    weather: 'Времето',
    filtWind: 'Вятър',
    filtPrecipitation: 'Валежи',
    filtTemp: 'Температура',
    closeBtn: 'Затвори',
    chartWind: 'Вятър измерен в м/с',
    chartTemp: 'Температура измерена в Целзий',
    chartRain: 'Вероятност за валежи в %',
  },
  weatherLocEditDialog: {
    title: 'Вашите следени местоположения',
    hint: '* Плъзгане и пускане за промяна на реда на местоположенията',
    submitBtn: 'Изпращане',
    close: 'Затвори',
    removeTooltip: 'Премахни от следените местоположения',
  },
  messages: {
    successRegister: 'Успешна регистрация',
    errRegister: 'Неуспешна регистрация!',
    successLogin: 'Успешно влязохте в системата',
    errLogin: 'Неуспешно влизане в системата!',
    successReplaceLocations: 'Местоположенията бяха успешно записани.',
    errReplaceLocations: 'Неуспешно записване на местоположенията!',
    successAddLocation: 'Успешно добавено местоположение',
    errAddLocation: 'Неуспешно добавяне на местоположение!',
    errForecast: 'Неуспешно зареждане на прогнозата!',
    errFetchLocations: 'Неуспешно извличане на местоположенията!',
    errLoadList: 'Неуспешно зареждане на списъка!',
    errLoadCity: 'Неуспешно зареждане на града!',
    successRemoveLocaion: 'Местоположението беше успешно премахнато.',
    errRemoveLocation: 'Неуспешно премахване на местоположението!',
    successLogout: 'Излязохте успешно от системата!',
    errGeoPermission:
      'Потребителят отказа геолокацията! Можете да нулирате разрешението от иконата вляво от URL-а.',
  },
});
