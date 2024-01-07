import { useState, type FC, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import { useFormData } from 'data-provider/useFormData';
import { Card } from 'components/Card/Card';
import { useHistory } from 'react-router-dom';
import TurboServicePng from '../../assets/ts.png';
import styles from './FirstStep.module.scss';

type TCompany = {
  uid: string;
  title: string;
  imgSrc: string;
};

const companies: Array<TCompany> = [
  {
    uid: 'Turbo-Service',
    title: 'Turbo Service',
    imgSrc: TurboServicePng,
  },
];

const FirstStep: FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const { data, setDataForm } = useFormData();
  const history = useHistory();

  useEffect(() => {
    if (data.firstStep) {
      setSelectedCompany(data.firstStep.institution);
    }
  }, [data]);

  const handleSelected = (index: number) => {
    const company = companies[index].uid;

    if (company) {
      if (selectedCompany !== company) {
        setSelectedCompany(company);
      } else {
        setSelectedCompany('');
      }
    }
  };

  const handleSave = () => {
    setDataForm('firstStep', { institution: selectedCompany });
    history.push('./second');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {companies &&
          companies.map(({ uid, ...rest }, index) => {
            return (
              <Card key={uid} {...rest} isSelected={uid === selectedCompany} onClick={() => handleSelected(index)} />
            );
          })}
      </div>
      <div className={styles.buttons}>
        <Button buttonText="Далее" disabled={!selectedCompany} onClick={handleSave} />
      </div>
    </div>
  );
};

export default FirstStep;
