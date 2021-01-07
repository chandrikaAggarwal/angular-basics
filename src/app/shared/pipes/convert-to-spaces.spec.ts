import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

describe('ConvertToSpaces Pipe', () => {
    const p = new ConvertToSpacesPipe();

    // Case I
    it('should remove \'-\' from \'C00-500\'', () => {
        expect(p.transform('C00-500', '-')).not.toContain('-');
    });

    // Case II
    it('should remove \'-\' from \'C00-500-11\'', () => {
        expect(p.transform('C00-500-11', '-')).not.toContain('-');
    });
});
