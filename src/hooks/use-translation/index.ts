import I18n from 'i18n';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux-store/store';

const translateText =
  (locale: any) =>
  (key: I18n.Scope, config = {}) =>
    key ? I18n.t(key, {locale, ...config}) : undefined;

const useTranslation = () => {
  const {language} = useSelector((state: RootState) => state.translate);
  return translateText(language);
};

export default useTranslation;
