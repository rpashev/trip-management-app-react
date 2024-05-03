import { BaseToggle } from '../components/UI/BaseToggle';
import { ThemeToggle } from '../components/UI/ThemeToggle';
import { useSettingsContext } from '../context/settings-context';

export const Settings = () => {
  const { settings, onChangeLanguage, onChangeUnits } = useSettingsContext();
  return (
    <div className="mt-8 py-4 max-container ">
      <div className="w-full rounded-lg px-5 py-4 pb-6 dark:text-slate-100 text-slate-800 sm:w-[25rem] bg-slate-100 dark:bg-slate-800">
        <h2 className="mb-5 text-center text-3xl">Settings</h2>
        <ul className="mx-auto flex flex-col items-center gap-6">
          <li className="flex items-center justify-between w-full gap-6">
            <label className="text-lg text-slate-800 dark:text-slate-100">Imperial units</label>
            <div>
              <BaseToggle isChecked={settings.units === 'metric'} setIsChecked={onChangeUnits} />
            </div>
          </li>
          <li className="flex items-center w-full justify-between gap-6">
            <label htmlFor="language" className="text-lg text-slate-800 dark:text-slate-100">
              Language
            </label>
            <div className="w-40 h-full">
              <select
                value={settings.language}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  onChangeLanguage(event.target.value)
                }
                id="language"
                className="tw-text-input w-full h-full cursor-pointer"
              >
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="bg">Bulgarian</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="cn">Chinese</option>
                <option value="ru">Russian</option>
              </select>
            </div>
          </li>
          <li className="flex items-center justify-between w-full gap-6">
            <label className="text-lg text-slate-800 dark:text-slate-100">Dark mode</label>
            <div className="text-slate-100">
              <ThemeToggle />
            </div>
          </li>
          <li className="flex items-center justify-between w-full gap-6">
            <label className="text-lg text-slate-800 dark:text-slate-100">Change location</label>
            <div>
              <button
                className="rounded bg-amber-400 px-4 py-2 text-md font-semibold tracking-wider text-slate-800
             transition-all hover:bg-amber-300"
              >
                Detect location
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
