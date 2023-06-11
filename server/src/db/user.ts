import DB from './index.ts';

class User {
  async selectAll() {
    return await DB.from('User').select('*');
  }

  async selectByKakaoId(kakaoId: number) {
    return await DB.from('User')
      .select(
        `
      id,
      name,
      Cake (
        id,
        cakeType,
        customCake,
        Letter (
          createdAt,
          name
        )
      )
    `
      )
      .eq('kakaoId', kakaoId)
      .single();
  }

  async selectById(id: string) {
    return await DB.from('User')
      .select(
        `
      id,
      name,
      Cake (
        id,
        cakeType,
        customCake,
        Letter (
          createdAt,
          name
        )
      )
    `
      )
      .eq('id', id)
      .single();
  }

  async create(kakaoId: number, name: string) {
    return await DB.from('User').insert({ name, kakaoId });
  }
}

export default new User();
