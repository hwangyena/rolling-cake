import DB from './index.ts';

class CakeDB {
  async selectById(id: string) {
    return await DB.from('Cake')
      .select(
        `
      userId,
      cakeType,
      customCake,
      Letter (
        createdAt,
        name,
        content,
        isPrivate
      )
      `
      )
      .eq('id', id)
      .single();
  }

  async create(
    userId: string,
    cakeType: CakeType,
    customCake: CustomCake | null
  ) {
    return (await DB.from('Cake')
      .insert({ userId, cakeType, customCake })
      .select()
      .single()) as DBRes<Cake>;
  }
}

export default new CakeDB();
