import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Test componet <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Simular eventos change y submit', () => {
        const value = 'Hola Mundo';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});