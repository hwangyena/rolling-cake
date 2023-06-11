import DB from './index.ts';

class User {
  async selectAll() {
    return await DB.from('User').select('*');
  }

  async selectById(id: string) {
    return await DB.from('User')
      .select(
        `
      name,
      Cake (
        cake_type,
        custom_cake,
        Letter (
          created_at,
          name
        )
      )
    `
      )
      .eq('id', id);
  }

  async create(id: string, name: string) {
    return await DB.from('User').insert({ id, name });
  }
}

export default new User();
