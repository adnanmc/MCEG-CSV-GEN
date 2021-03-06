export interface EventRow {
  event_type: string;
  flight_number: string;
  actual_out_time_utc: string;
  actual_off_time_utc: string;
  actual_on_time_utc: string;
  actual_in_time_utc: string;
  actual_eta_time_utc: string;
  actual_etd_time_utc: string;
  actual_eto_time_utc: string;
  actual_eon_time_utc: string;
  new_tail_number: string;
  test_result: string;
}
