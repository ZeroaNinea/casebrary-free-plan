import { EntryType } from './entry.interface';

export default interface CreateEntryDto {
  parentId: string | null;
  type: EntryType;
  title: string;
  icon?: string;
  color?: string;
}
