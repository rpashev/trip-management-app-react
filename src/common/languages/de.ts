import { LanguageMapType } from './en';

export const de: LanguageMapType = Object.freeze({
  linkTitles: {
    Login: 'Anmelden',
    Home: 'Startseite',
    ['Sign Up']: 'Registrieren',
    Logout: 'Abmelden',
    Map: 'Karte',
    Settings: 'Einstellungen',
  },
  pages: {
    login: {
      title: 'Anmelden',
      email: 'E-Mail',
      password: 'Passwort',
      errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein!',
      errorPassword: 'Das Passwort muss mindestens 6 Zeichen enthalten!',
      submitBtn: 'Senden',
    },
    signUp: {
      title: 'Registrieren',
      email: 'E-Mail',
      password: 'Passwort',
      errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein!',
      errorPassword: 'Das Passwort muss mindestens 6 Zeichen enthalten!',
      repPassword: 'Passwort wiederholen',
      errorRepPassword: 'Passwörter müssen übereinstimmen!',
      submitBtn: 'Senden',
    },
    home: {
      titleTracked: 'Verfolgte Standorte',
      searchPlaceholder: 'Standort suchen...',
      noResultsLabel: 'Keine Ergebnisse gefunden!',
      noTrackedLocationsLabel: 'Noch keine verfolgten Standorte.',
      editLocationsTooltip: 'Verfolgte Standorte bearbeiten',
    },
    settings: {
      title: 'Einstellungen',
      units: 'Imperial Einheiten',
      lang: 'Sprache',
      darMode: 'Dunkler Modus',
      detectBtn: 'Standort erkennen',
      changeLoc: 'Standort ändern',
    },
    map: {
      legTemp: 'Temperatur',
      legWind: 'Windgeschwindigkeit',
      legPrecip: 'Niederschlag',
      legPressure: 'Druck',
      legClouds: 'Wolken in',
      filtClouds: 'Wolken',
      filtWind: 'Wind',
      checkbox: 'Verfolgte Standorte anzeigen',
    },
  },
  locCard: {
    details: 'Details',
    feelsLike: 'Gefühlt wie',
    wind: 'Wind',
    humidity: 'Luftfeuchtigkeit',
    sunrise: 'Sonnenaufgang',
    sunset: 'Sonnenuntergang',
    addTooltip: 'Zu den verfolgten Standorten hinzufügen',
    removeTooltip: 'Aus den verfolgten Standorten entfernen',
    closePopup: 'Popup schließen',
    viewDet: 'Details anzeigen',
  },
  detDialog: {
    title: 'Wetter für',
    feelsLike: 'Gefühlt wie',
    wind: 'Wind',
    precipitation: 'Niederschlag',
    maxTemp: 'Max. Temperatur',
    minTemp: 'Min. Temperatur',
    avgTemp: 'Durchschn. Temperatur',
    weather: 'Wetter',
    filtWind: 'Wind',
    filtPrecipitation: 'Niederschlag',
    filtTemp: 'Temperatur',
    closeBtn: 'Schließen',
    chartWind: 'Wind gemessen in ',
    chartTemp: 'Temperatur gemessen in ',
    chartRain: 'Regenwahrscheinlichkeit in %',
  },
  weatherLocEditDialog: {
    title: 'Ihre verfolgten Standorte',
    hint: '* Ziehen und ablegen, um die Standorte zu ändern',
    submitBtn: 'Senden',
    close: 'Schließen',
    removeTooltip: 'Aus den verfolgten Standorten entfernen',
  },
  messages: {
    successRegister: 'Erfolgreich registriert',
    errRegister: 'Registrierung fehlgeschlagen!',
    successLogin: 'Erfolgreich angemeldet',
    errLogin: 'Anmeldung fehlgeschlagen!',
    successReplaceLocations: 'Standorte erfolgreich gespeichert.',
    errReplaceLocations: 'Standorte konnten nicht gespeichert werden!',
    successAddLocation: 'Standort erfolgreich hinzugefügt',
    errAddLocation: 'Standort konnte nicht hinzugefügt werden!',
    errForecast: 'Fehler beim Laden der Vorhersage!',
    errFetchLocations: 'Standorte konnten nicht abgerufen werden!',
    errLoadList: 'Fehler beim Laden der Liste!',
    errLoadCity: 'Fehler beim Laden der Stadt!',
    successRemoveLocaion: 'Standort erfolgreich entfernt.',
    errRemoveLocation: 'Standort konnte nicht entfernt werden!',
    successLogout: 'Sie haben sich erfolgreich abgemeldet!',
    errGeoPermission:
      'Benutzer hat die Geolokalisierung verweigert! Sie können die Berechtigung über das Symbol links von der URL zurücksetzen.',
  },
});
