export interface ScheduleData {
  id: number;
  title: string;
  description?: string;
  date: string;
  end_time: string;
  start_time: string;
  is_important: number;
}

export interface ScheduleDataSent {
  title: string;
  description?: string;
  date: string;
  end_time: string;
  start_time: string;
  is_important: number;
}