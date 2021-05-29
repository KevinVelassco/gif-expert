import { getGifs } from '../../helpers/getGifs';

describe('Test Helper getGifs', () => {
    test('Api giphy debe traer 12 elementos con categoria', (done) => {
        getGifs('anime').then(gifs => {
            expect(gifs.length).toBe(12);
            done();
        })
    });

    test('Api giphy debe traer 0 elementos sin categoria', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});