import DB from './index.ts';

class Cake {
  async selectById(id: string) {
    return await DB.from('Cake')
      .select(
        `
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
    return await DB.from('Cake').insert({ userId, cakeType, customCake });
  }
}

export default new Cake();
