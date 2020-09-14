export interface ScheduleData {
  id: number;
  title: string;
  description?: string;
  date: string;
  end_time: string;
  start_time: string;
  is_important: boolean;
}

export interface ScheduleDataSent {
  title: string;
  description?: string;
  date: string;
  end_time: string;
  start_time: string;
  is_important: boolean;
}