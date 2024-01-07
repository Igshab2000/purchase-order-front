import { useFormData } from 'data-provider/useFormData';
import type { TThirdStepForm } from 'formTypes';
import { useEffect, type FC, useCallback } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { CheckboxField } from 'components/fields/CheckboxField/CheckboxField';
import { InputField } from 'components/fields/InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useThirdFormValidation } from './ThirdStep.utils';
import styles from './ThirdStep.module.scss';

const ThirdStep: FC = () => {
  const { data, setDataForm } = useFormData();
  const history = useHistory();

  const defaultValues = data.thirdStep ?? {
    isDefaultList: false,
    workList: [{ workTitle: '', count: 0, price: 0 }],
    partsList: [{ partName: '', count: 0, price: 0 }],
  };

  const formSchema = useThirdFormValidation();

  const { handleSubmit, reset, control, formState, watch } = useForm<TThirdStepForm>({
    mode: 'all',
    shouldFocusError: true,
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    if (data.thirdStep) {
      reset(data.thirdStep);
    }
  }, [data.thirdStep, reset]);

  const isDefaultList = watch('isDefaultList') ?? false;

  const {
    fields: partsListFields,
    append: appendPartsList,
    remove: removePartsList,
  } = useFieldArray({
    control,
    name: 'partsList',
  });

  const {
    fields: workListFields,
    append: appendWorkList,
    remove: removeWorkList,
  } = useFieldArray({
    control,
    name: 'workList',
  });

  const handleBackward = useCallback(() => {
    history.push('./second');
  }, [history]);

  const handleSave = useCallback(() => {
    handleSubmit((formData: TThirdStepForm) => {
      setDataForm('thirdStep', formData);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <CheckboxField name="isDefaultList" control={control} label="Заполнить список услуг поумолчанию" />
        {!isDefaultList && (
          <>
            {workListFields.map(({ id }, index) => {
              return (
                <div className={styles['list-wrapper']}>
                  <InputField
                    key={`workTitle_${id}`}
                    labelContent="Наименование работы"
                    name={`workList.${index}.workTitle`}
                    control={control}
                  />
                  <div className={styles['count-and-price']}>
                    <InputField
                      key={`count_${id}`}
                      labelContent="Количество"
                      name={`workList.${index}.count`}
                      className={styles.field}
                      control={control}
                      type="number"
                    />
                    <InputField
                      key={`price_${id}`}
                      labelContent="Цена"
                      name={`workList.${index}.price`}
                      className={styles.field}
                      control={control}
                      type="number"
                    />
                  </div>
                  <div>
                    {workListFields.length > 1 ? (
                      <Button onClick={() => removeWorkList(index)} buttonText="Удалить" />
                    ) : null}
                  </div>
                </div>
              );
            })}
            <div>
              <Button onClick={() => appendWorkList({ workTitle: '', count: 0, price: 0 })} buttonText="Добавить еще" />
            </div>
            {partsListFields.map(({ id }, index) => {
              return (
                <div className={styles['list-wrapper']}>
                  <InputField
                    key={`partName_${id}`}
                    labelContent="Наименование детали"
                    name={`partsList.${index}.partName`}
                    control={control}
                  />
                  <div className={styles['count-and-price']}>
                    <InputField
                      key={`count_${id}`}
                      labelContent="Количество"
                      name={`partsList.${index}.count`}
                      className={styles.field}
                      control={control}
                    />
                    <InputField
                      key={`price_${id}`}
                      labelContent="Цена"
                      name={`partsList.${index}.price`}
                      className={styles.field}
                      control={control}
                    />
                  </div>
                  <div>
                    {partsListFields.length > 1 ? (
                      <Button onClick={() => removePartsList(index)} buttonText="Удалить" />
                    ) : null}
                  </div>
                </div>
              );
            })}
            <div>
              <Button onClick={() => appendPartsList({ partName: '', count: 0, price: 0 })} buttonText="Добавить еще" />
            </div>
          </>
        )}
      </div>
      <div className={styles.buttons}>
        <Button buttonText="Назад" onClick={handleBackward} />
        <Button buttonText="Получить отчет" onClick={handleSave} disabled={!formState.isDirty || !formState.isValid} />
      </div>
    </div>
  );
};

export default ThirdStep;
