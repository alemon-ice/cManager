import React, { useState, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

import { Container, InitialData, Details } from './styles';
import { Button } from 'components/atoms';

import { ScheduleData } from 'models/ScheduleModels';

interface ScheduleItemProps {
  itemData: ScheduleData;
  handleCompleteSchedule: (id?: number) => void;
  handleEditSchedule: (schedule?: ScheduleData) => void;
  handleDeleteSchedule: (id?: number) => void;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  itemData,
  handleCompleteSchedule,
  handleEditSchedule,
  handleDeleteSchedule,
}) => {
  const [getSchedule, setSchedule] = useState<ScheduleData>();
  const [getShowDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    itemData && setSchedule(itemData);
  }, [itemData]);

  const showDetails = () => {
    setShowDetails(!getShowDetails);
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
              <BsThreeDots size={25} />
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
                {
                  !getSchedule?.is_completed
                    ? <Button styleButton="primary" onClick={() => handleCompleteSchedule(getSchedule?.id)}>Concluir</Button>
                    : <Button styleButton="primary" disabled value="disable">Concluído</Button>
                }
                <Button styleButton="primary" onClick={() => handleEditSchedule(getSchedule)}>
                  <AiOutlineEdit size={20} />
                </Button>
                <Button styleButton="danger" onClick={() => handleDeleteSchedule(getSchedule?.id)}>
                  <AiOutlineDelete size={20} />
                </Button>
              </div>
            </Details>
          )
        }
      </Container>
    </>
  );
}

export default ScheduleItem;