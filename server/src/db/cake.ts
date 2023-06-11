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
}

export default new Cake();
