import countries from 'i18n-iso-countries';
import de from 'i18n-iso-countries/langs/de.json';
import en from 'i18n-iso-countries/langs/en.json';
import es from 'i18n-iso-countries/langs/es.json';
import fr from 'i18n-iso-countries/langs/fr.json';
import it from 'i18n-iso-countries/langs/it.json';
import pt from 'i18n-iso-countries/langs/pt.json';
import Flag from '../../components/flag';
import { getCurrentLanguage } from '../language';

const __setConfig = () => {
  countries.registerLocale(en);
  countries.registerLocale(es);
  countries.registerLocale(pt);
  countries.registerLocale(it);
  countries.registerLocale(fr);
  countries.registerLocale(de);
};

const GetAllCountries = () => {
  const countriesObj = countries.getNames(getCurrentLanguage(), { select: 'official' });
  const countriesList = Object.entries(countriesObj).map(e => ({
    key: e[0],
    value: e[1],
    icon: <Flag isoCode={e[0]} />,
  }));
  return countriesList;
};

__setConfig();

const CountriesUtils = {
  GetAllCountries,
};

export default CountriesUtils;
