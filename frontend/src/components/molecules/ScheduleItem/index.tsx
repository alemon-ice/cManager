import React, { useState, useEffect } from 'react';
import { parseISO, isPast } from 'date-fns';
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePushpin } from 'react-icons/ai';
import { BsThreeDots, BsExclamationCircle, BsCheckCircle } from 'react-icons/bs';

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
  const [getScheduleStatus, setScheduleStatus] = useState('');
  const [sizeButtonIcon, _] = useState(25);
  const [getButtonIcon, setButtonIcon] = useState(<BsThreeDots size={sizeButtonIcon} />);

  useEffect(() => {
    if (itemData.is_completed) {
      setScheduleStatus('is-completed');
      setButtonIcon(<BsCheckCircle size={sizeButtonIcon} style={{ color: '#0F0' }} />);
    } else if (itemData.is_important) {
      setButtonIcon(<AiOutlinePushpin size={sizeButtonIcon} />);
    } else {
      const scheduleStartDateTime = parseISO(`${itemData.date}T${itemData.start_time}`);

      if (isPast(scheduleStartDateTime)) {
        setScheduleStatus('is-late');
        setButtonIcon(<BsExclamationCircle size={sizeButtonIcon} style={{ color: '#F00' }} />);
      }
    }
  }, []);

  useEffect(() => {
    itemData && setSchedule(itemData);
  }, [itemData]);

  const showDetails = () => {
    setShowDetails(!getShowDetails);
  }

  const completeSchedule = () => {
    setScheduleStatus('is-completed');
    handleCompleteSchedule(getSchedule?.id);
    setButtonIcon(<BsCheckCircle size={sizeButtonIcon} style={{ color: '#0F0' }} />);
  }

  return (
    <>
      <Container className={getScheduleStatus}>
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
              {getButtonIcon}
            </button>
          </div>
        </InitialData>
        {
          getScheduleStatus === 'is-late' && <p
            style={{
              textAlign: 'center', color: '#F00', paddingBottom: '6%'
            }}
          >
            O agendamento está atrasado!
          </p>
        }
        {
          getShowDetails && (
            <Details>
              {
                getSchedule?.description
                  ? <p><strong>Descrição:</strong> {getSchedule?.description}</p>
                  : <p>Não possui descrição.</p>
              }
              <div>
                {
                  !getSchedule?.is_completed
                    ? <Button styleButton="primary" onClick={() => completeSchedule()}>Concluir</Button>
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