export interface CityDetails {
    name: string;
    ags: string;
  }

  export interface InfectionHistory {
    id: number;
    cases: string;
    date:Date;
  }

  export interface InfectionHistoryWithoutIndex {
    cases: string;
    date:Date;
  }


