import React, { useState, useEffect } from 'react';

import { Container, InitialData, Details } from './styles';
import { Button } from 'components/atoms';
import { Modal, SchedulingRegisterForm } from 'components/molecules';

import addSvg from 'assets/images/icons/black-add.svg';

import { ScheduleData } from 'models/ScheduleModels';

interface ScheduleItemProps {
  itemData: ScheduleData;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ itemData }) => {
  const [getSchedule, setSchedule] = useState<ScheduleData>();
  const [getShowDetails, setShowDetails] = useState<boolean>(false);
  const [getIsModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    itemData && setSchedule(itemData);
  }, [itemData]);

  const showDetails = () => {
    setShowDetails(!getShowDetails);
  }

  const handleEditSchedule = () => {
    try {
      setShowDetails(!getShowDetails);
      setIsModalVisible(!getIsModalVisible);
    } catch { }
  }

  const handleDeleteSchedule = (id?: number) => {
    console.log(id);
  }

  return (
    <>
      <Container>
        <InitialData>
          <div>
            <div>
              <p>das {getSchedule?.start_time}</p>
              <p>às {getSchedule?.end_time}</p>
            </div>
          </div>
          <div>
            <h2>{getSchedule?.title}</h2>
          </div>
          <div>
            <button type="button" onClick={() => showDetails()}>
              <img src={addSvg} alt="Novo agendamento" /> {/* FIXME ícone provisório */}
            </button>
          </div>
        </InitialData>
        {
          getShowDetails && (
            <Details>
              {
                getSchedule?.description
                  ? <p>{getSchedule?.description}</p>
                  : <p>Não possui descrição.</p>
              }
              <div>
                <Button styleButton="primary" onClick={() => handleEditSchedule()}>Editar</Button>
                <Button styleButton="danger" onClick={() => handleDeleteSchedule(getSchedule?.id)}>Excluir</Button>
              </div>
            </Details>
          )
        }
      </Container>
      {
        getIsModalVisible && <Modal title="Novo agendamento" content={<SchedulingRegisterForm setIsModalVisible={setIsModalVisible} scheduleId={getSchedule?.id} />} setIsModalVisible={setIsModalVisible} />
      }
    </>
  );
}

export default ScheduleItem;