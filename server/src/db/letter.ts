import DB from './index.ts';

class LetterDB {
  async create(cakeId: number, letter: Letter) {
    return await DB.from('Letter').insert({ cakeId, ...letter });
  }
}

export default new LetterDB();
