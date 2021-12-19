import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';

import Logos from 'components/atoms/Logo';
import {Modal} from '../../../molecules/Modal';
import styles from './styles';
import {AuthContainer} from '../../../atoms/AuthContainer';
import {Input} from '../../../atoms/Input';
import {useForm} from 'react-hook-form';
import {PasswordInput} from '../../../atoms/PasswordInput';
import {BaseText} from '../../../atoms/BaseText';
import {TextButton} from '../../../atoms/TextButton';
import Checkbox from '../../../atoms/Checkbox/index.android';
import {useTranslation} from '../../../../hooks';
import {signUpSchema} from '../../../../utils/schema';
import {Colors, Typography} from '../../../../styles';
import CloseIcon from '../../../../assets/svgs/ic_close.svg';

export default function SignUp() {
  const _t = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTermsSelected, setTermsSelection] = useState(false);
  const [disableCreate, setDisableCreate] = useState(false);
  const [unexpectedError, setUnexpectedError] = useState(false);
  const [termsModal, setTermsModal] = useState(false);
  const [termsText, setTermsText] = useState('');

  useEffect(() => {
    if (isTermsSelected) {
      setDisableCreate(false);
    }
  }, [isTermsSelected]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const onSubmit = (formData: object) => {
    setIsSubmitting(true);

    if (!isTermsSelected) {
      setDisableCreate(prevState => !prevState);
      setIsSubmitting(false);
      setUnexpectedError(true);
    }
  };

  const handleTermsModal = () => {
    setTermsSelection(false);
    setTermsModal(prevState => !prevState);
  };

  const handleTermsSelection = () => {
    setTermsSelection(prevState => !prevState);
    setTermsModal(false);
  };

  return (
    <AuthContainer style={styles.container}>
      <View style={styles.logo}>
        <Logos />
      </View>
      <View style={styles.formContainer}>
        <Input
          control={control}
          // style={}
          label={_t('name')}
          name="name"
          error={errors?.name}
        />
        <Input
          control={control}
          // style={}
          label={_t('email')}
          name="email"
          error={errors?.email}
          textContentType={'emailAddress'}
        />
        <PasswordInput
          control={control}
          label={_t('password')}
          name="password"
          error={errors?.password}
        />
        <PasswordInput
          control={control}
          label={_t('passwordConfirm')}
          name="passwordConfirmation"
          error={errors?.passwordConfirmation}
        />
        <View style={styles.checkbox}>
          <Checkbox
            isChecked={isTermsSelected}
            onValueChange={handleTermsSelection}
            value={isTermsSelected}
          />
          <BaseText
            lineHeight={Typography.LINE_HEIGHT_24}
            color={Colors.GRAY_DARKER_GUNPOWDER}
            style={styles.termsCheckBoxText}>
            {_t('termsCheckBox')}
          </BaseText>
          <TouchableOpacity onPress={handleTermsModal}>
            <BaseText
              fontSize={Typography.FONT_SIZE_14}
              lineHeight={Typography.LINE_HEIGHT_24}
              color={Colors.SOFT_PURPLE}
              style={styles.termsAndConditionsText}>
              {_t('termsAndConditions')}
            </BaseText>
          </TouchableOpacity>
        </View>
        {/*<BaseText*/}
        {/*  fontSize={Typography.FONT_SIZE_12}*/}
        {/*  color={disableCreate ? Colors.RED_INPUT_ERROR : Colors.WHITE}*/}
        {/*  lineHeight={Typography.LINE_HEIGHT_14}*/}
        {/*  style={styles.errorText}>*/}
        {/*  {_t('termsError')}*/}
        {/*</BaseText>*/}
        {/*<BaseText*/}
        {/*  fontSize={Typography.FONT_SIZE_12}*/}
        {/*  color={unexpectedError ? Colors.RED_INPUT_ERROR : Colors.WHITE}*/}
        {/*  lineHeight={Typography.LINE_HEIGHT_14}*/}
        {/*  style={styles.errorText}>*/}
        {/*  {_t('unexpectedError')}*/}
        {/*</BaseText>*/}
        <View style={styles.submitContainer}>
          <TextButton
            type="primary"
            textStyle={styles.buttonText}
            onPress={handleSubmit(onSubmit)}
            text={'Create Account'}
            isDisabled={disableCreate}
            isUppercase
            isBold
            isLoading={isSubmitting}
          />
          <View style={styles.footerText}>
            <BaseText
              fontSize={Typography.FONT_SIZE_12}
              color={Colors.GRAY_DARKER_GUNPOWDER}
              lineHeight={Typography.LINE_HEIGHT_14}>
              {_t('hasAccount')}
            </BaseText>
            <TouchableOpacity onPress={() => {}}>
              <BaseText
                fontSize={Typography.FONT_SIZE_12}
                color={Colors.SOFT_PURPLE}
                lineHeight={Typography.LINE_HEIGHT_14}
                isBold>
                {_t('signIn')}
              </BaseText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Modal
          isVisible={termsModal}
          icon={<CloseIcon />}
          title={'terms'}
          bodyText={termsText}
          positiveTextButton={_t('agree')}
          onPositiveButtonPress={handleTermsSelection}
          onClose={handleTermsModal}
          onIconPress={handleTermsModal}
        />
      </View>
    </AuthContainer>
  );
}
