import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('null value', () => {
    expect(pipe.transform(null)).toEqual(null);
  });

  it('text value inferior to limit', () => {
    expect(pipe.transform('mon texte', 5)).toEqual('mo...');
  });

  it('text value superior to limit', () => {
    expect(pipe.transform('mon texte', 10)).toEqual('mon texte');
  });
});
