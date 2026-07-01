import EntryRepository from '@/repositories/entry.repository';
import Entry from '@/types/entry.interface';
import CreateEntryDto from '@/types/create-entry.dto';

export default class EntryService {
  constructor(private repository = new EntryRepository()) {}

  async create(data: CreateEntryDto): Promise<Entry> {
    const now = Date.now();

    const entry: Entry = {
      id: crypto.randomUUID(),
      parentId: data.parentId,
      type: data.type,
      title: data.title.trim(),
      icon: data.icon,
      color: data.color,
      order: 0,
      properties: {},
      createdAt: now,
      updatedAt: now,
    };

    await this.repository.create(entry);

    return entry;
  }
}
