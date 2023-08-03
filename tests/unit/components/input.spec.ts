import { mount } from '@vue/test-utils';
import { useAthleteStore } from '../../../src/stores/athlete';
import Input from '../../../src/components/Input.vue'; 

jest.mock('../stores/athlete', () => ({
  useAthleteStore: jest.fn(() => ({
    editName: jest.fn(),
    athlete: {
      name: 'John Doe',
    },
  })),
}));

describe('Input', () => {
  it('should call editName when inputting valid characters', () => {
    const athleteStore = useAthleteStore();
    const wrapper = mount(Input);

    wrapper.find('input').trigger('keydown', { key: 'a' });

    expect(athleteStore.editName).toHaveBeenCalledWith('Johna');
  });

  it('should prevent default when inputting invalid characters', () => {
    const athleteStore = useAthleteStore();
    const wrapper = mount(Input);

    wrapper.find('input').trigger('keydown', { key: '1' });

    expect(athleteStore.editName).not.toHaveBeenCalled();
  });
});