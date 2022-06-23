import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TechtalkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Techtalk {
  readonly id: string;
  readonly eventname?: string | null;
  readonly eventdescripion?: string | null;
  readonly eventduration?: number | null;
  readonly talkcommittdate?: string | null;
  readonly eventlocation?: string | null;
  readonly eventdate?: string | null;
  readonly eventurl?: string | null;
  readonly eventmail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Techtalk, TechtalkMetaData>);
  static copyOf(source: Techtalk, mutator: (draft: MutableModel<Techtalk, TechtalkMetaData>) => MutableModel<Techtalk, TechtalkMetaData> | void): Techtalk;
}