import DB from './index.ts';

class User {
  async selectAll() {
    return await DB.from('User').select('*');
  }

  async selectById(id: string) {
    return await DB.from('User').select().eq('id', id);
  }

  async create(id: string, name: string) {
    return await DB.from('User').insert({ id, name });
  }
}

// const { data: updataeData, error: updateError } = await DB
//   .from('User')
//   .update({ name: 'Yena' })
//   .eq('id', 1);

export default new User();
