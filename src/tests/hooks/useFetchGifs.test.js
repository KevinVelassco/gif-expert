import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('anime'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('anime'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(12);
        expect(loading).toBe(false);
    });
});